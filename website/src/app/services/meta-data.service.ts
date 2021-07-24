import { Injectable } from '@angular/core';
import { Dataset } from '../interfaces/dataset';
import { MetaDataAjaxService } from './ajax/meta-data-ajax.service';
import { ApiKeystoreService } from './api-keystore.service';
import { ORGAN_TYPES } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  constructor(private metaDataAjaxService: MetaDataAjaxService,
    private apiKeystoreService: ApiKeystoreService) { }

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
        this.restructureSparcMetadata(response);
      },
      error: (error) => { console.error(error); }
    });
  }

  /****************************************************************
   * Convert the raw sparc metadata file into an array of Dataset
   ****************************************************************/
  private restructureSparcMetadata(sMetadata:any){
    sMetadata.hits.hits.forEach(smd => {
      let record = this.initializeDatasetRecord('SPARC');

      record.name = smd._source?.item?.name;
      record.description = smd._source?.item?.description;
      if(smd._source?.anatomy?.organ){
        record.anatomicalStructureId = smd._source.anatomy.organ.map((o)=>o.curie).filter((o)=>!!o);
        record.anatomicalStructureName = smd._source.anatomy.organ.map((o)=>o.name).filter((o)=>!!o);
      }
      if(!record.anatomicalStructureName && smd._source?.anatomy?.sampleSpecimenLocation){
        record.anatomicalStructureName = smd._source.anatomy.sampleSpecimenLocation;
      }
      if( smd._source?.item?.types){
        record.dataType = smd._source.item.types.map((t)=>t.name).filter((t)=>!!t);
      }
      record.publicationStatus = smd._source?.item?.published?.status;
      record.groupName = smd._source?.pennsieve?.organization?.name;
      this.datasetArr.push(record);
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
