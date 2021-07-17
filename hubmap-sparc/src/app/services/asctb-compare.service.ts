import { Injectable } from '@angular/core';
import { SparcAsctbAjaxService } from './ajax/sparc-asctb-ajax.service';
import { Organ } from 'src/app/interfaces/organ';

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
  selectedOrganType = 'UBERON:0000955';
  //Selectable organ types in the UI control
  organTypes = [
    {
      name:'Brain', 
      id:'UBERON:0000955', 
      sparcUri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_brain.json',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/345174398'
    },{
      name:'Heart', 
      id:'UBERON:0000948', 
      sparcUri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_heart.json',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1240281363'
    },{
      name:'Kidney', 
      id:'UBERON:0002113', 
      sparcUri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_kidney.json',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1760639962'
    },{
      name:'Large intestine', 
      id:'UBERON:0000059', 
      sparcUri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_large-intestine.json',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1687995716'
    },{
      name:'Lymph nodes', 
      id:'UBERON:0000029', 
      sparcUri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_lymph-nodes.json',
      hubmapUri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/272157091'
    }
  ];

  //Organ hierarchial data
  sparcRawOrganData = null;
  hubmapRawOrganData = null;

  /*************************************************************************************
   * Data tree structure representing organ data from both sparc and hubmap.
   *************************************************************************************/
  mergedOrganData: Organ = null;
  mergedOrganIdx: any = {}; //id:Organ index

  /*************************************************************************************
   * Data structure suitable for table presentation
   *************************************************************************************/
  mergedTableArr = [];

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
    this.hubmapRawOrganData = null;
    this.mergedOrganData = null;
    this.mergedOrganIdx = {};

    //Fetch sparc data if a data uri is available
    if(selectedOrganObj.sparcUri){
      this.sparcAsctbAjaxService.fetchGenericJson(selectedOrganObj.sparcUri).subscribe({
          next: (response:any) => {
            this.sparcRawOrganData = response;
            if(this.hubmapRawOrganData != null){
              this.restructureRawOrganData(); // Execute merge only if hubmap data is also ready
            }
          },
          error: (error) => { console.error(error); }
        });
    }

    //Fetch HuBMAP data if a data uri is available
    if(selectedOrganObj.hubmapUri){
      this.sparcAsctbAjaxService.fetchGenericJson(selectedOrganObj.hubmapUri).subscribe({
        next: (response:any) => { 
          this.hubmapRawOrganData = response;
          if(this.sparcRawOrganData != null){
            this.restructureRawOrganData(); // Execute merge only if sparc data is also ready
          }
        },
        error: (error) => { console.error(error); }
      });
    }
  }


  /*************************************************************************************
   * Restructure sparc, hubmap data into forms useful for presentation
   *************************************************************************************/
   private restructureRawOrganData(){

    //Create one consolidated merged object that conforms to the Organ interface
    this.mergeRawOrganData();

    //Create a derivative data structure suitable for table presentation
    this.generateTableArr();


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
    this.indexSparcOrganTree(sparcOrganIdx, this.sparcRawOrganData);

    //Construct an index on id:node for each hubmap organ
    //Iterate over hubmap organs and initialize any that do not already exist
    //Hubmap data is represented as rows of objects with an anatomical structures array
    let hubmapOrganIdx = {};
    this.hubmapRawOrganData.data.forEach((rowObj: any)=>{
      rowObj.anatomical_structures.forEach(organ => {
        //Hubmap anatomical structures have form {id: "UBERON:0000948", name: "heart", rdfs_label: "heart"}
        //Some Hubmap organs do not have an ID but do have a name. When this occurs, create a surrogate "smart" ID
        if(!organ.id || organ.id == ''){
          organ.id = 'SURROGATE_ID:' + organ.name.toUpperCase();
        }
        hubmapOrganIdx[organ.id] = organ;
      });
    });

    //Iterate over sparc organs and initialize merged organ objects
    Object.values(sparcOrganIdx).forEach((sparcOrgan: any)=>{
      let mergedOrgan:Organ = this.initializeMergedOrgan(sparcOrgan.id, sparcOrgan.name, sparcOrgan.label, true, (sparcOrgan.id in hubmapOrganIdx));
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
    this.mergedOrganData = this.mergedOrganIdx[this.sparcRawOrganData.id]

    /*************************************************************************************
     * Step 2: Add edge data to mergedOrganData
     *************************************************************************************/
    //Iterate over all merged organs and look up child references
    Object.values(this.mergedOrganIdx).forEach((mergedOrgan:Organ) =>{
      //Add child references from sparc data if the organ is in the sparc set
      if(mergedOrgan.id in sparcOrganIdx){
        let sparcOrgan = sparcOrganIdx[mergedOrgan.id];
        if(sparcOrgan.children && sparcOrgan.children.length > 0){
          sparcOrgan.children.forEach(childSparcOrgan => {
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
        }
      });
      //At this point, asHubmapChildren and asSparcChildren are now populated with the respective children of the two datasets
      //However, we need to populate asSharedChildren with the intersection of these two sets, and subtract shared children 
      //from each of the source-specific sets
      
      //Calculate intersection of the two sets and assign to sharedChildren
      mergedOrgan.asSharedChildren = new Set([...mergedOrgan.asHubmapChildren].filter(x => mergedOrgan.asSparcChildren.has(x)))
      //Calculate subtraction of sharedChildren from hubmapChildren 
      mergedOrgan.asHubmapChildren = new Set([...mergedOrgan.asHubmapChildren].filter(x => !mergedOrgan.asSharedChildren.has(x)))
      //Calculate subtraction of sharedChildren from sparcChildren 
      mergedOrgan.asSparcChildren = new Set([...mergedOrgan.asSparcChildren].filter(x => !mergedOrgan.asSharedChildren.has(x)))

      //TODO: construct cell-type sets
    });
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
        sharedCellTypes: null,
        hubmapCellTypes: null,
        sparcCellTypes: null,
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
   * Depth-first walk of sparc organ tree datastructure to construct an id:organ index
   *************************************************************************************/
  private indexSparcOrganTree(idx, node){
    idx[node.id] = node;
    if(node.children && node.children.length > 0){
      node.children.forEach(organ => {
        this.indexSparcOrganTree(idx, organ);
      });
    }
  }

  /*************************************************************************************
   * Utility function to create an object conforming to the Organ interface
   *************************************************************************************/
   private initializeMergedOrgan(id:string, name:string, label:string, sparcResident:boolean, hubmapResident:boolean): Organ{
    return {
      id: id,
      name: name,
      label: label,
      sparcResident: sparcResident,
      hubmapResident: hubmapResident,
      //Initialize, but do not assign the children sets yet
      asSparcChildren: new Set(),
      asHubmapChildren: new Set(),
      asSharedChildren: new Set(),
      ctSparcChildren: new Set(),
      ctHubmapChildren: new Set(),
      ctSharedChildren: new Set()
    };
  }
}
