import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Organ } from 'src/app/interfaces/organ';
import { CellType } from '../interfaces/cellType';
import { SparcAsctbAjaxService } from './ajax/sparc-asctb-ajax.service';


/*******************************************************************************************
 * @Author Samuel O'Blenes
 * @Date 7/15/21
 * This service maintains UI state, data, and associated business logic for the ASCT+B
 * comparison views
 *******************************************************************************************/
@Injectable({
  providedIn: 'root'
})
export class AsctbCompareService {

  //View type currently selected by the user
  selectedViewType:string; // = 'table';
  //Organ type currently selected by the user
  selectedOrganType = 'UBERON:0000948';
  //Human-readable data status string ['Not ready'|'Loading'|'Ready']
  dataLoadStatus = 'Not ready';
  //Selectable organ types in the UI control (@TODO: Externalize this to a resource file)
  organTypes = [
    {
      name:'Heart',
      id:'UBERON:0000948',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1240281363'
    },{
      name:'Brain',
      id:'UBERON:0000955',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/345174398'
    },{
      name:'Kidney',
      id:'UBERON:0002113',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1760639962'
    },{
      name:'Large intestine',
      id:'UBERON:0000059',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1687995716'
    },{
      name:'Lymph nodes',
      id:'UBERON:0000029',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/272157091'
    }
  ];

  //Organ hierarchial data
  sparcRawOrganData = null; //Unparsed scigraph neighbor query response
  sparcRawUberonClData = null; //Unparsed scigraph cypher query response
  hubmapRawOrganData = null; //Unparsed hubmap api response
  sparcTreeOrganData = null;

  //Map of ontology id to cellType {<ontologyId:sting>:[<cellType1, cellType2, ...]} e.g {'UBERON:12345':[{id:'CL_56789', ...}, ...]}
  sparcCellTypeEdges = {};

  //Synonym data in form {<synonym:string>:<id:string>}
  synonymIdx = null;

  //Dataset summary statistics
  countTotalAS:number = 0;
  countSparcAS:number = 0;
  countHubmapAS:number = 0;
  countSharedAS:number = 0;
  countSparcASLinks:number = 0;
  countHubmapASLinks:number = 0;
  countSharedASLinks:number = 0;
  countTotalCT:number = 0;
  //countSparcCT:number = 0;
  //countHubmapCT:number = 0;
  //countSharedCT:number = 0;
  /*************************************************************************************
   * Data tree structure representing organ data from both sparc and hubmap.
   *************************************************************************************/
  mergedOrganData: Organ = null;
  mergedOrganIdx: any = {}; //id:Organ index
  mergedCellTypeIdx: any = {}; //CellTypeid:CellType index

  /*************************************************************************************
   * Data structure suitable for table presentation
   *************************************************************************************/
  mergedTableArr = [];

  /*************************************************************************************
   * Data structure for D3 force-directed graph presentation
   *************************************************************************************/
  fdNodes = []; // {id: "UBERON:00012345", group: 1, organ:{...}}
  fdEdges = []; // {source: "UBERON:00012345", target: "UBERON:00012346", value: 1}

  constructor(private sparcAsctbAjaxService: SparcAsctbAjaxService) {}

  /*************************************************************************************
   * Fetch data for the selected organ from SPARC and HuBMAP. After data has been
   * loaded from both sources, execute a merge to construct the consolidated object
   * for presentation.
   *************************************************************************************/
  public loadOrganData(){


    //Get the selected organ type object
    let selectedOrganObj = this.organTypes.find((t)=>{return t.id === this.selectedOrganType});

    //Reset the data references
    this.sparcRawOrganData = null;
    this.sparcTreeOrganData = null;
    this.sparcRawUberonClData = null;
    this.hubmapRawOrganData = null;
    this.mergedOrganData = null;
    this.synonymIdx = null;
    this.mergedOrganIdx = {};
    this.countTotalAS = 0;
    this.countSparcAS = 0;
    this.countHubmapAS = 0;
    this.countSharedAS = 0;
    this.countSparcASLinks = 0;
    this.countHubmapASLinks = 0;
    this.countSharedASLinks = 0;
    this.countTotalCT = 0;
    //this.countSparcCT = 0;
    //this.countHubmapCT = 0;
    //this.countSharedCT = 0;


    //Update the data loading status
    this.dataLoadStatus = 'Loading';

    //Fetch all datasets and execute parse & merge operation when they arrive
    forkJoin([
      this.sparcAsctbAjaxService.fetchSparcPartonomy(selectedOrganObj.id),
      this.sparcAsctbAjaxService.fetchSparcUberonToClMappings(),
      this.sparcAsctbAjaxService.fetchGenericJson(selectedOrganObj.hubmapUri)
    ]).subscribe(([sparcPartonomyResponse, sparcClMappingResponse, hubmapPartonomyResponse]) => {
      this.sparcRawOrganData = sparcPartonomyResponse;
      this.sparcTreeOrganData = this.sciGraphQueryToTree(sparcPartonomyResponse, this.selectedOrganType);
      this.synonymIdx = this.sciGraphQueryToSynonymIdx(sparcPartonomyResponse);
      this.hubmapRawOrganData = hubmapPartonomyResponse;
      this.sparcRawUberonClData = sparcClMappingResponse;
      this.restructureRawOrganData();
    });
  }

  /*************************************************************************************
   * Restructure sparc, hubmap data into forms useful for presentation
   *************************************************************************************/
   private restructureRawOrganData(){

    //Create one consolidated merged object that conforms to the Organ interface
    this.mergeRawOrganData();

    //Create a derivative data structure suitable for table presentation
    this.generateTableArr();

    //Create node and edge datastructures for a force directed view
    this.generateForcedDirectedDatasets();

    //Update the data loading status
    this.dataLoadStatus = 'Ready';

    //Render data to console for inspection
    console.log("mergedOrganData:");
    console.dir(this.mergedOrganData);

    console.log("mergedOrganIndex:");
    console.dir(this.mergedOrganIdx);

    console.log("mergedTableArr:");
    console.dir(this.mergedTableArr)

   }

  /*************************************************************************************
   * Merge raw data objects from SPARC and HuBMAP into a consolidated reportable format
   *************************************************************************************/
  private mergeRawOrganData(){

    /*************************************************************************************
     * Step 1: Initialize and index merged organ objects without edge data
     *************************************************************************************/

    //Construct an index on id:node for each sparc organ
    let sparcOrganIdx = {};
    this.indexSparcOrganTree(sparcOrganIdx, this.sparcTreeOrganData, new Set());

    //Construct an index on id:node for each hubmap organ
    //Iterate over hubmap organs and initialize any that do not already exist
    //Hubmap data is represented as rows of objects with an anatomical structures array
    let hubmapOrganIdx = {};
    this.hubmapRawOrganData.data.forEach((rowObj: any)=>{
      rowObj.anatomical_structures.forEach(organ => {
        //Hubmap anatomical structures have form {id: "UBERON:0000948", name: "heart", rdfs_label: "heart"}
        /**************************************************************************************************************************
         * Some Hubmap organs do not have an ID but do have a name. When this occurs, first search the index of
         * synonyms. If a term match is found, assign the associated ID. Otherwise, create a surrogate "smart" ID
        **************************************************************************************************************************/

        if(!organ.id || organ.id == ''){
          let nameMatchedId = this.synonymIdx[organ.name];
          if(nameMatchedId){
            organ.id = nameMatchedId;
          }else{
            organ.id = 'SURROGATE_ID:' + organ.name.toUpperCase();
          }
        }
        hubmapOrganIdx[organ.id] = organ;
      });
    });


    //Convert raw uberon celltype response (this.sparcRawUberonClData) to (this.sparcCellTypeEdges) {<ontologyId:sting>:[<cellType1, cellType2, ...]}
    // Also add the CT object to mergedCellTypeIdx
    this.sparcRawUberonClData.forEach(ct => {
      let ctId = ct['cl.iri'].replace('http://purl.obolibrary.org/obo/','').replace('_',':');
      let asId = ct['u.iri'].replace('http://purl.obolibrary.org/obo/','').replace('_',':');
      if(!this.mergedCellTypeIdx[ctId]){
        this.mergedCellTypeIdx[ctId] = this.initializeMergedCellType(ctId, ct['cl.label'], ct['cl.label'])
      }
      if(!this.sparcCellTypeEdges[asId]){
        this.sparcCellTypeEdges[asId] = [this.mergedCellTypeIdx[ctId]];
      }else if(this.sparcCellTypeEdges[asId].indexOf(this.mergedCellTypeIdx[ctId]) < 0){
        this.sparcCellTypeEdges[asId].push(this.mergedCellTypeIdx[ctId]);
      }
    });

    //Some additional CT -> AS relationships get mapped by the node traversal query
    this.sparcRawOrganData.edges.filter(edge=>{
      return edge.sub.includes('CL:');
    }).forEach(edge => {
      if(!this.mergedCellTypeIdx[edge.sub]){
        const asNode = this.sparcRawOrganData.nodes.find(node=>node.id === edge.sub);
        this.mergedCellTypeIdx[edge.sub] = this.initializeMergedCellType(edge.sub, asNode.lbl, asNode.lbl);
      }
      if(!this.sparcCellTypeEdges[edge.obj]){
        this.sparcCellTypeEdges[edge.obj] = [this.mergedCellTypeIdx[edge.sub]];
      }else if(this.sparcCellTypeEdges[edge.obj].indexOf(this.mergedCellTypeIdx[edge.sub]) < 0){
        this.sparcCellTypeEdges[edge.obj].push(this.mergedCellTypeIdx[edge.sub]);
      }
    });

    /*
    console.log('raw ct');
    console.dir(this.sparcRawUberonClData);
    console.log('ct map by ctId');
    console.dir(this.mergedCellTypeIdx);
    console.log('ct[] map by asId');
    console.dir(this.sparcCellTypeEdges);
    */

    //Iterate over sparc organs and initialize merged organ objects
    Object.values(sparcOrganIdx).forEach((sparcOrgan: any)=>{
      let mergedOrgan:Organ = this.initializeMergedOrgan(sparcOrgan.id, sparcOrgan.name, sparcOrgan.label, true, (sparcOrgan.id in hubmapOrganIdx));
      //Look up and append the sparc cellTypes based on the organ id
      if(this.sparcCellTypeEdges[sparcOrgan.id]){
        this.sparcCellTypeEdges[sparcOrgan.id].forEach(ct => {
          mergedOrgan.ctSparcChildren.add(ct);
        });
      }
      this.mergedOrganIdx[mergedOrgan.id] = mergedOrgan;
    });
    //Iterate over hubmap organs and initialize any that do not already exist
    //Hubmap data is represented as rows of objects with an anatomical structures array
    Object.values(hubmapOrganIdx).forEach((hubmapOrgan:any) =>{
      //If organ does not exist yet in the merged index, add it
      if(!this.mergedOrganIdx[hubmapOrgan.id]){
        let mergedOrgan:Organ = this.initializeMergedOrgan(hubmapOrgan.id, hubmapOrgan.name, hubmapOrgan.rdfs_label, false, true);
        this.mergedOrganIdx[mergedOrgan.id] = mergedOrgan;
      }
    });

    //Point mergedOrganData at the root node
    this.mergedOrganData = this.mergedOrganIdx[this.sparcTreeOrganData.id]

    /*************************************************************************************
     * Step 2: Add edge data to mergedOrganData
     *************************************************************************************/
    //Iterate over all merged organs and look up child references
    Object.values(this.mergedOrganIdx).forEach((mergedOrgan:Organ) =>{
      //Add child references from sparc data if the organ is in the sparc set
      if(mergedOrgan.id in sparcOrganIdx){
        let sparcOrgan = sparcOrganIdx[mergedOrgan.id];
        if(sparcOrgan.children && sparcOrgan.children.length > 0){
          sparcOrgan.children.filter(c=>!!c).forEach(childSparcOrgan => {
            mergedOrgan.asSparcChildren.add(this.mergedOrganIdx[childSparcOrgan.id]);
          });
        }
      }

      //Add child references from hubmap data
      this.hubmapRawOrganData.data.forEach((rowObj: any)=>{
        //We need to walk the array c-style because children require index look-ahead
        for(let i=0; i < rowObj.anatomical_structures.length; i++){
          let hubmapOrgan = rowObj.anatomical_structures[i];

          //For each hubmap organ encountered, determine if there is a cell to the right of it, which contains the child
          if(mergedOrgan.id === hubmapOrgan.id && i+1 < rowObj.anatomical_structures.length){
            let hubmapChildOrgan = rowObj.anatomical_structures[i+1];
            mergedOrgan.asHubmapChildren.add(this.mergedOrganIdx[hubmapChildOrgan.id]);
          }
          //Add Cell types to the merged Organ from Hubmap
          if(mergedOrgan.id === hubmapOrgan.id && rowObj.cell_types){
            rowObj.cell_types.forEach((hubmapCt)=>{
              //Pull the celltype reference from the index if it exists, otherwise initialize it
              //Assign a surrogate id if it is missing
              let ctId = hubmapCt.id || 'SURROGATE_ID:'+hubmapCt.name;
              let cellType:CellType = (ctId in this.mergedCellTypeIdx) ?
                this.mergedCellTypeIdx[ctId] :
                this.initializeMergedCellType(ctId, hubmapCt.name, hubmapCt.rfs_label);
                this.mergedCellTypeIdx[ctId] = cellType;
                mergedOrgan.ctHubmapChildren.add(cellType);
            });
          }
        }
      });

      /*************************************************************************************
      * Step 3:At this point, asHubmapChildren and asSparcChildren are now populated with
      * the respective children of the two datasets. However, we need to populate
      * asSharedChildren with the intersection of these two sets, and subtract shared
      * children from each of the source-specific sets.
      **************************************************************************************/

      mergedOrgan.asAllChildren = new Set([...mergedOrgan.asHubmapChildren, ...mergedOrgan.asSparcChildren]);
      //Calculate intersection of the two sets and assign to sharedChildren
      mergedOrgan.asSharedChildren = new Set([...mergedOrgan.asHubmapChildren].filter(x => mergedOrgan.asSparcChildren.has(x)));
      //Calculate subtraction of sharedChildren from hubmapChildren
      mergedOrgan.asHubmapChildren = new Set([...mergedOrgan.asHubmapChildren].filter(x => !mergedOrgan.asSharedChildren.has(x)));
      //Calculate subtraction of sharedChildren from sparcChildren
      mergedOrgan.asSparcChildren = new Set([...mergedOrgan.asSparcChildren].filter(x => !mergedOrgan.asSharedChildren.has(x)));


      /*************************************************************************************
      * Step 3B: Follow the same pattern to populate cell type sets
      **************************************************************************************/
      mergedOrgan.ctAllChildren = new Set([...mergedOrgan.ctHubmapChildren, ...mergedOrgan.ctSparcChildren]);
      //Calculate intersection of the two sets and assign to sharedChildren
      mergedOrgan.ctSharedChildren = new Set([...mergedOrgan.ctHubmapChildren].filter(x => mergedOrgan.ctSparcChildren.has(x)));
      //Calculate subtraction of sharedChildren from hubmapChildren
      mergedOrgan.ctHubmapChildren = new Set([...mergedOrgan.ctHubmapChildren].filter(x => !mergedOrgan.ctSharedChildren.has(x)));
      //Calculate subtraction of sharedChildren from sparcChildren
      mergedOrgan.ctSparcChildren = new Set([...mergedOrgan.ctSparcChildren].filter(x => !mergedOrgan.ctSharedChildren.has(x)));


      //Update summary statistics
      this.countSparcASLinks += mergedOrgan.asSparcChildren.size;
      this.countHubmapASLinks += mergedOrgan.asHubmapChildren.size;
      this.countSharedASLinks += mergedOrgan.asSharedChildren.size;
    });

    /*************************************************************************************
     * Step 4: Walk the merged organ tree and populate maxDepth, parents,
     * asAcyclicalChildren
     *************************************************************************************/
    this.augmentMergedOrganNode(this.mergedOrganData, null, new Set<Organ>());

    this.countTotalAS = Object.keys(this.mergedOrganIdx).length;
    this.countSparcAS = Object.values(this.mergedOrganIdx).filter((organ:Organ) => organ.sparcResident && !organ.hubmapResident).length;
    this.countHubmapAS = Object.values(this.mergedOrganIdx).filter((organ:Organ) => !organ.sparcResident && organ.hubmapResident).length;
    this.countSharedAS = Object.values(this.mergedOrganIdx).filter((organ:Organ) => organ.sparcResident && organ.hubmapResident).length;

    this.countTotalCT = Object.keys(this.mergedCellTypeIdx).length;

  }

  /*************************************************************************************
   * Structure merged index data to table-ready array for UI presentation
   * Table will have the following columns:
   * ID | Name | Label | Shared Cell Types | HuBMAP Cell Types | Sparc Cell Types
   *************************************************************************************/
  private generateTableArr(){
    this.mergedTableArr = [];
    Object.values(this.mergedOrganIdx).forEach((organ:Organ)=>{
      this.mergedTableArr.push({
        id: organ.id,
        name: organ.name,
        label: organ.label,
        allCellTypes: Array.from(organ.ctAllChildren),
        sharedCellTypes: Array.from(organ.ctSharedChildren),
        hubmapCellTypes: Array.from(organ.ctHubmapChildren),
        sparcCellTypes: Array.from(organ.ctSparcChildren),
        sparcResident: organ.sparcResident,
        hubmapResident: organ.hubmapResident
      });
    });

    //Sort by 1) HubmapResident, 2) SparcResident, 3) Name
    this.mergedTableArr.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.mergedTableArr.sort((a, b) => (a.sparcResident > b.sparcResident) ? -1 : ((b.sparcResident > a.sparcResident) ? 1 : 0));
    this.mergedTableArr.sort((a, b) => (a.hubmapResident > b.hubmapResident) ? -1 : ((b.hubmapResident > a.hubmapResident) ? 1 : 0));
  }

  /*************************************************************************************
   * Structure merged index data to force directed graph arrays for UI presentation
   *************************************************************************************/
   private generateForcedDirectedDatasets(){
    this.fdNodes = []; // {id: "UBERON:00012345", group: 1, organ:{...}}
    this.fdEdges = []; // {source: "UBERON:00012345", target: "UBERON:00012346", value: 1}
    Object.values(this.mergedOrganIdx).forEach((organ:Organ)=>{
      this.fdNodes.push({id:organ.id, group:((organ.sparcResident && organ.hubmapResident)?1: (!organ.sparcResident && organ.hubmapResident)?2: 3), organ:organ});
      organ.asAllChildren.forEach((childOrgan)=>{
        this.fdEdges.push({source:childOrgan.id, target:organ.id, value:1});
      });
    });
  }

  /*************************************************************************************
   * Depth-first walk of sparc organ tree datastructure to construct an id:organ index
   *************************************************************************************/
  private indexSparcOrganTree(idx, node, visited){
    if(node.id.indexOf('CL:') < 0 && !visited.has(node)){ //Do not traverse any celltype nodes that are encountered
      idx[node.id] = node;
      visited.add(node);
      if(node.children && node.children.length > 0){
        node.children.filter(o=>!!o).forEach(organ => {
          this.indexSparcOrganTree(idx, organ, visited);
        });
      }
    }
  }

  /*************************************************************************************
   * Depth-first walk of merged organ tree to populate maxDepth, asParents, and
   * asAcyclicalChildren
   *************************************************************************************/
  private augmentMergedOrganNode(node: Organ, parent: Organ, visitedSet: Set<Organ>){
    visitedSet.add(node); //Add this node to the visited set so that we do not revisit
    if(parent){

      //Find parent with maximum depth. Add as child of that parent. Remove from children of other parents
      let deepestParent = Array.from(node.asParents).reduce(function(prev, current) {
          return (prev.maxDepth > current.maxDepth) ? prev : current
      });
      //Only deepest parent may claim this node as its child
      deepestParent.asAcyclicalChildren.add(node);
      node.asParents.forEach((parent)=>{
        if(parent !== deepestParent){
          parent.asAcyclicalChildren.delete(node);
        }
      });
      node.maxDepth = deepestParent.maxDepth+1;
    } else { //Root node gets depth 0
      node.maxDepth = 0;
    }
    //Iterate on next node
    node.asAllChildren.forEach((child)=>{
      child.asParents.add(node);
      if(!visitedSet.has(child)){
        this.augmentMergedOrganNode(child, node, visitedSet);
      }
    });
  }

  /*************************************************************************************
   * Utility function to restructure a raw SciGraph neighbor query response into a
   * tree structure. Returns the root node of the tree
   * @Return Example:
   * {
   *  "name":"atrium auricular region",
   *  "id": "UBERON:0006618",
      "label": "atrium auricular region",
      "children": [<child1>, <child2>, ...]
    }
   *************************************************************************************/
  private sciGraphQueryToTree(scigraphRawData:any, organId:string): any{
    let nodeList = []
    let nodeIdx = {}
    scigraphRawData['nodes'].filter((node)=>(node.id.indexOf('CL:') < 0)).forEach(node => {
      let abbreviatedNode = {'name':node['lbl'], 'label': node['lbl'], 'id': node['id']}
      nodeList.push(abbreviatedNode)
      nodeIdx[node['id']] = abbreviatedNode
    });

    //Index terms by edge "object" ID to facilitate ancestry resolution
    let objEdgeIdx = {} //Index to look up children from a term id
    let subEdgeIdx = {} //Index to look up parent from a term id
    scigraphRawData['edges'].filter((edge)=>(edge['obj'].indexOf('CL:') < 0)).forEach(edge => {
      objEdgeIdx[edge['obj']] = objEdgeIdx[edge['obj']] || []; //Initialize array if not already
      objEdgeIdx[edge['obj']].push(nodeIdx[edge['sub']]);
      subEdgeIdx[edge['sub']] = nodeIdx[edge['obj']];
    });

    nodeList.forEach((node)=>{
      node.children = objEdgeIdx[node.id];
    });
    return nodeIdx[organId];
  }

  /*************************************************************************************
   * Utility function to extract synonym string associations with ontology IDs
   * @Return Example:
   * {
   *  "atrial auricle" : "UBERON:0006618",
   *  "atrium appendage" : "UBERON:0006618",
   *  "auricula atrii" : "UBERON:0006618",
   *  ...
   * }
   *************************************************************************************/
  private sciGraphQueryToSynonymIdx(scigraphRawData:any): any{
    let termToIdIdx = {};
    scigraphRawData.nodes.forEach((node) => {
      if(node.meta['http://www.geneontology.org/formats/oboInOwl#hasExactSynonym']){
        node.meta['http://www.geneontology.org/formats/oboInOwl#hasExactSynonym'].forEach(synonym => {
          termToIdIdx[synonym] = node.id;
        });
      }
    });
    return termToIdIdx;
  }


  /*************************************************************************************
   * Utility function to create an object conforming to the Organ interface
   *************************************************************************************/
   private initializeMergedOrgan(id:string, name:string, label:string, sparcResident:boolean, hubmapResident:boolean): Organ{
    return {
      id: id,
      name: name,
      label: label,
      maxDepth: -1,
      sparcResident: sparcResident,
      hubmapResident: hubmapResident,
      //Initialize, but do not assign the children sets yet
      asParents: new Set(),
      asAcyclicalChildren: new Set(),
      asAllChildren: new Set(),
      asSparcChildren: new Set(),
      asHubmapChildren: new Set(),
      asSharedChildren: new Set(),
      ctAllChildren: new Set(),
      ctSparcChildren: new Set(),
      ctHubmapChildren: new Set(),
      ctSharedChildren: new Set()
    };
  }

  /*************************************************************************************
   * Utility function to create an object conforming to the CellType interface
   *************************************************************************************/
   private initializeMergedCellType(id:string, name:string, label:string): CellType{
    return {
      id: id,
      name: name,
      label: label
    };
  }
}
