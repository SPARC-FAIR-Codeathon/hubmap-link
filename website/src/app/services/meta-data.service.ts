import { Injectable } from '@angular/core';
import { ORGAN_TYPES } from '../common/global-constants';
import { Dataset } from '../interfaces/dataset';
import { MetaDataAjaxService } from './ajax/meta-data-ajax.service';


@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  constructor(private metaDataAjaxService: MetaDataAjaxService) { }

  public datasetArr:Dataset[] = [];

  public fetchMetadata(){

    //Clear out the dataset
    this.datasetArr = [];

    //Fetch Hubmap metadata
    this.metaDataAjaxService.fetchHubmapMetadata().subscribe({
      next: (response:any) => {
        console.dir(response);
        this.restructureHubmapMetadata(response);
      },
      error: (error) => { console.error(error); }
    });

    //Fetch Sparc metadata
    this.metaDataAjaxService.fetchSparcMetadata().subscribe({
      next: (response:any) => {
        console.dir(response);
        this.datasetArr = this.datasetArr.concat(response);
      },
      error: (error) => { console.error(error); }
    });
  }

  /****************************************************************
   * Convert the raw sparc metadata file into an array of Dataset
   ****************************************************************/
   private restructureHubmapMetadata(sMetadata:any){
    sMetadata.hits.hits.forEach(smd => {
      let record = this.initializeDatasetRecord('HuBMAP');

      record.description = smd._source?.description;
      if(smd._source?.ancestors){
        record.anatomicalStructureName = smd._source.ancestors.map((o)=>ORGAN_TYPES[o.organ]).filter((o)=>!!o);
      }
      record.dataType = smd._source?.entity_type;
      record.groupName = smd._source?.group_name;

      this.datasetArr.push(record);
    });
  }




  /****************************************************************
   * Utility function to initalize a dataset record
   ****************************************************************/
  private initializeDatasetRecord(consortium:string):Dataset{
    return {
      name:null,
      description: null,
      anatomicalStructureId: [],
      anatomicalStructureName: [],
      dataType: [],
      publicationStatus: null,
      externalLink: null,
      groupName: null,
      consortium: consortium
    }
  }
}
