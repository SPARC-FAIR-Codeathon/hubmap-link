import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Dataset } from '../interfaces/dataset';
import { MetaDataAjaxService } from './ajax/meta-data-ajax.service';

/*******************************************************************************************
 * @Author Samuel O'Blenes
 * @Date 7/23/21
 * This service maintains UI state, data, and associated business logic for the dataset 
 * comparison
 *******************************************************************************************/
@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  public datasetArr: Dataset[] = [];

  constructor(private metaDataAjaxService: MetaDataAjaxService) { }

  //View type currently selected by the user
  selectedViewType:string;
  //Human-readable data status string ['Not ready'|'Loading'|'Ready']
  dataLoadStatus = 'Not ready';

  //Dataset summary statistics
  datasetCountSparc = 0;
  datasetCountHubmap = 0;

  // Download the consortia's metadata
  public fetchMetadata(): Observable<Dataset[]> {
    //Reset the data references and stats
    this.dataLoadStatus = 'Loading';
    this.datasetCountSparc = 0;
    this.datasetCountHubmap = 0;
    
    
    //Fetch data
    const datasets$ = forkJoin([
      this.metaDataAjaxService.fetchHubmapMetadata(),
      this.metaDataAjaxService.fetchSparcMetadata()
    ]).pipe(
      map(([ds1, ds2]) => ds1.concat(ds2)),
      tap(datasets => this.datasetArr = datasets),
      catchError((err) => { console.error(err); return [[] as Dataset[]]; })
    )

    datasets$.subscribe({error: console.error});
    datasets$.subscribe(() => {
      this.dataLoadStatus = 'Ready';
      console.dir(this.datasetArr);
      this.datasetCountSparc = this.datasetArr.filter((ds)=>ds.consortium==='SPARC').length;
      this.datasetCountHubmap = this.datasetArr.filter((ds)=>ds.consortium==='HuBMAP').length;
    });

    return datasets$;
  }
}
