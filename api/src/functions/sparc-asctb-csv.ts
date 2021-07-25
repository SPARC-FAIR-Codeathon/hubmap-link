import { unparse } from 'papaparse';
import { fetchGraph, Graph } from './fetch-graph';
import { fetchSparcUberonToClMappings } from './fetch-uberon-cl-links';


export async function createSparcAsctbCsv(organIdentifier: string, apiKey: string): Promise<string> {
  const partOf = 'http://purl.obolibrary.org/obo/BFO_0000050';
  const asGraph = await fetchGraph(organIdentifier, partOf, 10, apiKey);
  const clLinks = await fetchSparcUberonToClMappings(apiKey);
  const csvRows = convertResponsesToCsvRows(organIdentifier, asGraph, clLinks);
  return unparse(csvRows, {header: false}); 
}

function convertResponsesToCsvRows(organIdentifier: string, graph: Graph, clLinks: any[]): any[][] {
  const nodeList: any[] = [];
  const nodeIdx: Record<string, any> = {};
  graph.nodes.filter(node => !node['id'].includes('CL:')).forEach(node => {
    const abbreviatedNode = {name: node['lbl'] as string, label: node['lbl'] as string, id: node['id'] as string};
    nodeList.push(abbreviatedNode);
    nodeIdx[node['id']] = abbreviatedNode;
  });

  // Index terms by edge "object" ID to facilitate ancestry resolution
  const objEdgeIdx: Record<string, any> = {}; // Index to look up children from a term id
  const subEdgeIdx: Record<string, any> = {}; // Index to look up parent from a term id
  graph.edges.filter(edge => !edge['sub'].includes('CL:')).forEach(edge => {
    objEdgeIdx[edge['obj']] = objEdgeIdx[edge['obj']] || []; // Initialize array if not already
    objEdgeIdx[edge['obj']].push(nodeIdx[edge['sub']]);
    subEdgeIdx[edge['sub']] = nodeIdx[edge['obj']];
  });

  // Define a function to recursively list the ancestors of a node. Assume a strict hierarchy
  const listAncestry = (node: any, visited: any, ancestryList: any[]) => {
    if(node && !visited.has(node.id)){
      visited.add(node.id);
      ancestryList.push(node);
      if(node['id'] in subEdgeIdx) {
        listAncestry(subEdgeIdx[node['id']], visited, ancestryList);
      }
    }
  };

  // Iterate over all terms and generate their ancestry list
  // Reverse list so that ancestors appear leftmost
  const allAncestryList: any[] = [];
  nodeList.forEach((node) => {
    const nodeAncestryList: any[] = [];
    allAncestryList.push(nodeAncestryList);
    listAncestry(node, new Set(), nodeAncestryList);
    nodeAncestryList.reverse();
  });

  //Create a map from anatomical structure id to array of celltypes. eg. {'UBERON:12345' : [[CT/1, CT/1/LABEL, CT/1/ID],[CT/2, CT/2/LABEL, CT/2/ID], ...]}
  let sparcCellTypeEdges:string[][] = [];
  let mergedCellTypeIdx:any = {} //Idx of clId:[CT/1, CT/1/LABEL, CT/1/ID]
  clLinks.forEach((ct:any) => {
    let ctId = ct['cl.iri'].replace('http://purl.obolibrary.org/obo/','').replace('_',':');
    let asId = ct['u.iri'].replace('http://purl.obolibrary.org/obo/','').replace('_',':');
    if(!mergedCellTypeIdx[ctId]){
      mergedCellTypeIdx[ctId] = {name:ct['cl.label'], label:ct['cl.label'], id:ctId};
    }
    if(!sparcCellTypeEdges[asId]){
      sparcCellTypeEdges[asId] = [mergedCellTypeIdx[ctId]];
    }else if(sparcCellTypeEdges[asId].indexOf(mergedCellTypeIdx[ctId]) < 0){
      sparcCellTypeEdges[asId].push(mergedCellTypeIdx[ctId]);
    }
  });

  //Some additional CT -> AS relationships get mapped by the node traversal query
  //Add these into sparcCellTypeEdges
  graph.edges.filter((edge:any)=> edge.sub.includes('CL:')).forEach((edge:any) => {
    if(!mergedCellTypeIdx[edge.sub]){ //If the cell tyoe id isn't in the associative array yet
      const asNode = graph.nodes.find(node=>node.id === edge.sub); //Locate the node object using the reference
      mergedCellTypeIdx[edge.sub] = {name:asNode.lbl, label:asNode.lbl, id:edge.sub};
    }
    if(!sparcCellTypeEdges[edge.obj]){
      sparcCellTypeEdges[edge.obj] = [mergedCellTypeIdx[edge.sub]];
    }else if(sparcCellTypeEdges[edge.obj].indexOf(mergedCellTypeIdx[edge.sub]) < 0){
      sparcCellTypeEdges[edge.obj].push(mergedCellTypeIdx[edge.sub]);
    }
  });

  // Determine max depth of as array before adding celltypes
  const max_as_depth = Math.max.apply(Math, allAncestryList.map(function(as:string[]) { return as.length; }));

  //Append celltypes to end of ancestryList
  allAncestryList.forEach((row)=>{
    let specificAsId = row[row.length-1].id; //Find the last (most specific AS in the row, and pull out the id which lives in index 2)
    let cellTypesObj = sparcCellTypeEdges[specificAsId]; //Get all cell types associated with the specific anatomic structure
    row.push(...Array(max_as_depth - row.length));//pad out each row of the jagged array to maxAsDepth
    if(cellTypesObj){
      row.push(...cellTypesObj); //Append cell types
    }
  });

  // Generate header columns based on max depth
  const max_depth = Math.max.apply(Math, allAncestryList.map(function(al:string[]) { return al.length; }));
  const max_ct_depth = max_depth - max_as_depth;
  const columnNamesArr = [];
  for(let i=1; i < max_as_depth+1; i++){
    columnNamesArr.push('AS/'+i);
    columnNamesArr.push('AS/'+i+'/LABEL');
    columnNamesArr.push('AS/'+i+'/ID');
  }
  for(let i=1; i < max_ct_depth+1; i++){
    columnNamesArr.push('CT/'+i);
    columnNamesArr.push('CT/'+i+'/LABEL');
    columnNamesArr.push('CT/'+i+'/ID');
  }

  // Convert node objects to array representations for CSV export
  // Convert 2d array of object to 1d array of comma separated string


  const dataCsvArr: string[][] = allAncestryList.map((row)=>{
    const pad = ((max_depth - row.length) * 3);
    let dataRow: string[] = [];

    row.forEach((asCtGroup:any) => {
      if(asCtGroup){
        dataRow = dataRow.concat([ asCtGroup.name, asCtGroup.label, asCtGroup.id ]);
      }else{
        dataRow = dataRow.concat([null,null,null]);
      }
    });
    dataRow = dataRow.concat(Array(pad));
    return dataRow;
  });

  // Generate header rows
  const headerArr = [
    ['Anatomical Strucures, Cell Types and Biomarkers Table for ' + nodeIdx[organIdentifier].name + ' v2.0'],
    ['_'], // the ASCT+B API is greedy removing rows which breaks it here.
    ['Author Name(s):'],
    ['Author ORCID(s):'],
    ['Reviewer(s):'],
    ['General Publication(s):'],
    ['Data DOI:'],
    ['Date:', new Date().toLocaleDateString()],
    ['Version Number:', 'v1.0'],
    ['CEDAR Template ID:']
  ].map((row) => row.concat(Array(((max_depth - row.length) * 3) + 1)));

  return [
    ...headerArr,
    ...[columnNamesArr],
    ...dataCsvArr
  ];
}
