import { Injectable } from '@angular/core';
import { SparcAsctbAjaxService } from './ajax/sparc-asctb-ajax.service';

@Injectable({
  providedIn: 'root'
})
export class AsctbGenerateService {

  constructor(private sparcAsctbAjaxService: SparcAsctbAjaxService) { }

  /*************************************************************************************************
   * Execute a request against SPARC scigraph for all neighbors across PART_OF relationships
   * @return promise
   *************************************************************************************************/
  public generateAsctbDataForExport(organIdentifier:string){
    if(organIdentifier){
      return this.sparcAsctbAjaxService.fetchSparcPartonomy(organIdentifier, 'http://purl.obolibrary.org/obo/BFO_0000050').subscribe({
        next: (response:any) => {
          this.parseSparcNeighborResponseToAsctbCsv(response);
        },
        error: (error) => { console.error(error); }
      });
    }
  }

  private parseSparcNeighborResponseToAsctbCsv(response:any){
/*    let nodeList = []
    let nodeIdx = {}
    response['nodes'].forEach(node => {
      let abbreviatedNode = {'name':node.get('lbl'), 'label': node.get('lbl'), 'id': node.get('id')}
      nodeList.push(abbreviatedNode)
      nodeIdx[node.get('id')] = abbreviatedNode
    });
        
    //Index terms by edge "object" ID to facilitate ancestry resolution
    let objEdgeIdx = {} //Index to look up children from a term id
    let subEdgeIdx = {} //Index to look up parent from a term id
    response['edges'].forEach(edge => {
      objEdgeIdx[edge.get('obj')] = objEdgeIdx[edge.get('obj')] || []; //Initialize array if not already
      objEdgeIdx[edge.get('obj')].push(nodeIdx[edge['sub']]);
      subEdgeIdx[edge.get('sub')] = nodeIdx[edge['obj']];
    });

    //Define a function to recursively list the ancestors of a node. Assume a strict hierarchy
    let listAncestry = (node, ancestryList) =>{
      ancestryList.push(node)
      if(node['id'] in subEdgeIdx){
        nodeIdx.get
        listAncestry(subEdgeIdx[node.get('id')], ancestryList)
      }
    }
*/
  }
  
}



/*
Original Python program
-----------------------
#Initialize and index neighbor terms by id
nodeList = []
nodeIdx = {}
for node in neighbor_node_response['nodes']:
    abbreviatedNode = {'name':node.get('lbl'), 'label': node.get('lbl'), 'id': node.get('id')}
    nodeList.append(abbreviatedNode)
    nodeIdx[node.get('id')] = abbreviatedNode
    
#Index terms by edge "object" ID to facilitate ancestry resolution
objEdgeIdx = defaultdict(list) #Index to look up children from a term id
subEdgeIdx = {} #Index to look up parent from a term id
for edge in neighbor_node_response['edges']:
    objEdgeIdx[edge.get('obj')].append(nodeIdx.get(edge['sub'])) 
    subEdgeIdx[edge.get('sub')] = nodeIdx.get(edge['obj'])


# Define a function to recursively list the ancestors of a node. Assume a strict hierarchy
def listAncestry(node, ancestryList):
    ancestryList.append(node)
    if node.get('id') in subEdgeIdx:
        nodeIdx.get
        listAncestry(subEdgeIdx[node.get('id')], ancestryList)
        
# Iterate over all terms and generate their ancestry list
# Append root node to the end of the list, then reverse it so that ancestors appear first
allAncestryList = []
for node in nodeList:
    nodeAncestryList = []
    allAncestryList.append(nodeAncestryList)
    listAncestry(node, nodeAncestryList)
    nodeAncestryList.reverse()
    
#Generate dataframe header columns based on max depth
max_depth = len(max(allAncestryList,key=len))
columns = []
for i in range(1, max_depth+1):
    columns.append('AS/'+str(i))
    columns.append('AS/'+str(i)+'/LABEL')
    columns.append('AS/'+str(i)+'/ID')
    
#Convert node objects to array representations for CSV export
csv_term_structure = ['name', 'label', 'id']
csv_ready_arr = [[[term[k] for k in csv_term_structure] for term in termList] \
                  for termList in allAncestryList]

#Flatten the innermost list
csv_ready_arr = [[item for sublist in termList for item in sublist] \
                  for termList in csv_ready_arr]

#Pad jagged arrays to make pandas happy
for termList in csv_ready_arr:
    pad_list = ([None] * ((max_depth * 3) - len(termList)))
    termList.extend(pad_list)

#CSV renderers like all rows to have a consistent number of columns
def write_padded_row(content_list):
    content_list += [None] * ((max_depth * 3) - len(content_list))
    writer.writerow(content_list)
        
#Generate ASCT+B CSV format headers
with open(file_path, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quoting=csv.QUOTE_MINIMAL)
    write_padded_row(['Anatomical Strucures, Cell Types and Biomarkers Table for ' + nodeIdx.get(root_node_id).get('name') + ' v1.0'])
    write_padded_row([None])
    write_padded_row(['Author Name(s):'])
    write_padded_row(['Author ORCID(s):'])
    write_padded_row(['Reviewer(s):'])
    write_padded_row(['General Publication(s):'])
    write_padded_row(['Data DOI:'])
    write_padded_row(['Date:', time.strftime('%m/%d/%Y')])
    write_padded_row(['Version Number:','v1.0'])
    write_padded_row([None])
#Export padded list
csv_df = pd.DataFrame(csv_ready_arr, columns=columns)
csv_df.to_csv(file_path, mode='a', index=False);
*/
