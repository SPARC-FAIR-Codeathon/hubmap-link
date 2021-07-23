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
  graph.nodes.forEach(node => {
    const abbreviatedNode = {name: node['lbl'] as string, label: node['lbl'] as string, id: node['id'] as string};
    nodeList.push(abbreviatedNode);
    nodeIdx[node['id']] = abbreviatedNode;
  });

  // Index terms by edge "object" ID to facilitate ancestry resolution
  const objEdgeIdx: Record<string, any> = {}; // Index to look up children from a term id
  const subEdgeIdx: Record<string, any> = {}; // Index to look up parent from a term id
  graph.edges.forEach(edge => {
    objEdgeIdx[edge['obj']] = objEdgeIdx[edge['obj']] || []; // Initialize array if not already
    objEdgeIdx[edge['obj']].push(nodeIdx[edge['sub']]);
    subEdgeIdx[edge['sub']] = nodeIdx[edge['obj']];
  });

  // Define a function to recursively list the ancestors of a node. Assume a strict hierarchy
  const listAncestry = (node: any, ancestryList: any[]) => {
    ancestryList.push(node);
    if(node['id'] in subEdgeIdx) {
      listAncestry(subEdgeIdx[node['id']], ancestryList);
    }
  };

  // Iterate over all terms and generate their ancestry list
  // Append root node to the end of the list, then reverse it so that ancestors appear first
  const allAncestryList: any[] = [];
  nodeList.forEach((node) => {
    const nodeAncestryList: any[] = [];
    allAncestryList.push(nodeAncestryList);
    listAncestry(node, nodeAncestryList);
    nodeAncestryList.reverse();
  });

  // Generate header columns based on max depth
  const max_depth = Math.max.apply(Math, allAncestryList.map(function(al) { return al.length; }));
  const columnNamesArr = [];
  for(let i=1; i < max_depth+1; i++){
    columnNamesArr.push('AS/'+i);
    columnNamesArr.push('AS/'+i+'/LABEL');
    columnNamesArr.push('AS/'+i+'/ID');
  }

  // Convert node objects to array representations for CSV export
  // Convert 2d array of object to 1d array of comma separated string
  const dataCsvArr: string[][] = allAncestryList.map((row)=>{
    const pad = ((max_depth - row.length) * 3) + 1;
    let dataRow: string[] = [];
    for (const abbreviatedNode of row) {
      dataRow = dataRow.concat([ abbreviatedNode.name, abbreviatedNode.label, abbreviatedNode.id ]);
    }
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
