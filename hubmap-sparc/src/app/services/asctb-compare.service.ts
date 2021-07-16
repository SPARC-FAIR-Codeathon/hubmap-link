import { Injectable } from '@angular/core';
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
  selectedViewType:string = 'table';
  //Organ type currently selected by the user
  selectedOrganType = 'UBERON:0000955';
  //Selectable organ types in the UI control
  organTypes = [
    {
      name:'Brain', 
      id:'UBERON:0000955', 
      sparc_uri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_brain.json',
      hubmap_uri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/345174398'
    },{
      name:'Heart', 
      id:'UBERON:0000948', 
      sparc_uri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_heart.json',
      hubmap_uri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1240281363'
    },{
      name:'Kidney', 
      id:'UBERON:0002113', 
      sparc_uri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_kidney.json',
      hubmap_uri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1760639962'
    },{
      name:'Large intestine', 
      id:'UBERON:0000059', 
      sparc_uri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_large-intestine.json',
      hubmap_uri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1687995716'
    },{
      name:'Lymph nodes', 
      id:'UBERON:0000029', 
      sparc_uri:'https://raw.githubusercontent.com/SPARC-FAIR-Codeathon/hubmap-link/features/export_asctb_csv/data/sparc_lymph-nodes.json',
      hubmap_uri:'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/272157091'
    }
  ];

  //Organ hierarchial data
  selectedOrganData = null;

  constructor(private sparcAsctbAjaxService: SparcAsctbAjaxService) {}

  public loadOrganData(){
    //Get the selected organ type object
    let selectedOrganObj = this.organTypes.find((t)=>{return t.id === this.selectedOrganType});

    //Fetch sparc data
    this.sparcAsctbAjaxService.fetchGenericJson(selectedOrganObj.sparc_uri).subscribe({
        next: (response:any) => { 
          this.selectedOrganData = response;
          console.dir(this.selectedOrganData)
        },
        error: (error) => { console.error(error); }
      });
    //TODO: Fetch and parse hubmap data
  }
}
