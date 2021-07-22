import { Injectable } from '@angular/core';
import { SparcAsctbAjaxService } from './ajax/sparc-asctb-ajax.service';
import { ApiKeystoreService } from './api-keystore.service';

@Injectable({
  providedIn: 'root'
})
export class AsctbGenerateService {

  constructor(private sparcAsctbAjaxService: SparcAsctbAjaxService,
    private apiKeystoreService: ApiKeystoreService) { }

  /*************************************************************************************************
   * Execute a request against SPARC scigraph for all neighbors across PART_OF relationships
   * @return promise
   *************************************************************************************************/
  public generateAsctbDataForExport(organIdentifier:string, callback:Function){
    if(organIdentifier){
      return this.sparcAsctbAjaxService.fetchSparcPartonomy(organIdentifier, 'http://purl.obolibrary.org/obo/BFO_0000050', 10, this.apiKeystoreService.sparcSciCrunchApiKey).subscribe({
        next: (response:any) => {
          let csvStr = this.parseSparcNeighborResponseToAsctbCsv(response, organIdentifier);
          callback((organIdentifier + '_SPARC_ASCTB.csv'), csvStr);
        },
        error: (error) => { console.error(error); }
      });
    }
  }

  private parseSparcNeighborResponseToAsctbCsv(response:any, organIdentifier:string){
    let nodeList = []
    let nodeIdx = {}
    response['nodes'].forEach(node => {
      let abbreviatedNode = {'name':node['lbl'], 'label': node['lbl'], 'id': node['id']}
      nodeList.push(abbreviatedNode)
      nodeIdx[node['id']] = abbreviatedNode
    });
        
    //Index terms by edge "object" ID to facilitate ancestry resolution
    let objEdgeIdx = {} //Index to look up children from a term id
    let subEdgeIdx = {} //Index to look up parent from a term id
    response['edges'].forEach(edge => {
      objEdgeIdx[edge['obj']] = objEdgeIdx[edge['obj']] || []; //Initialize array if not already
      objEdgeIdx[edge['obj']].push(nodeIdx[edge['sub']]);
      subEdgeIdx[edge['sub']] = nodeIdx[edge['obj']];
    });

    //Define a function to recursively list the ancestors of a node. Assume a strict hierarchy
    let listAncestry = (node, ancestryList) =>{
      ancestryList.push(node)
      if(node['id'] in subEdgeIdx){
        listAncestry(subEdgeIdx[node['id']], ancestryList)
      }
    }

    // Iterate over all terms and generate their ancestry list
    // Append root node to the end of the list, then reverse it so that ancestors appear first
    let allAncestryList = []
    nodeList.forEach((node)=>{
        let nodeAncestryList = []
        allAncestryList.push(nodeAncestryList)
        listAncestry(node, nodeAncestryList)
        nodeAncestryList.reverse()
    });

    // Generate header columns based on max depth
    let max_depth = Math.max.apply(Math, allAncestryList.map(function(al) { return al.length; }))
    let columnNamesArr = []
    for(let i=1; i < max_depth+1; i++){
      columnNamesArr.push('AS/'+i);
      columnNamesArr.push('AS/'+i+'/LABEL');
      columnNamesArr.push('AS/'+i+'/ID');
    }
    let columnNames = columnNamesArr.join(',');

    // Convert node objects to array representations for CSV export
    //Convert 2d array of object to 1d array of comma separated string
    let dataCsvArr = [];
    allAncestryList.forEach((row)=>{
      let pad = ((max_depth - row.length) * 3) + 1;
      dataCsvArr.push((row.map(abbreviatedNode => {
        return abbreviatedNode.name+','+abbreviatedNode.label+','+abbreviatedNode.id;
      })).join(',') + Array(pad).join(",") );
    });

    //Generate header rows
    let headerArr = [];
    headerArr.push('Anatomical Strucures, Cell Types and Biomarkers Table for ' + nodeIdx[organIdentifier].name + ' v1.0' + Array(max_depth*3-1).join(","));
    headerArr.push(Array(max_depth*3).join(","));
    headerArr.push(Array(max_depth*3).join(","));
    headerArr.push('Author Name(s):' + Array(max_depth*3).join(","));
    headerArr.push('Author ORCID(s):' + Array(max_depth*3).join(","));
    headerArr.push('Reviewer(s):' + Array(max_depth*3).join(","));
    headerArr.push('General Publication(s):' + Array(max_depth*3).join(","));
    headerArr.push('Data DOI:' + Array(max_depth*3).join(","));
    headerArr.push('Date:,' + new Date() + Array(max_depth*3-1).join(","));
    headerArr.push('Version Number:','v1.0' + Array(max_depth*3-1).join(","));
    headerArr.push(Array(max_depth*3).join(","));

    let csvStr = headerArr.join('\n') + '\n';
    csvStr += columnNames + '\n'
    csvStr += dataCsvArr.join('\n');

    return csvStr;
  }
}