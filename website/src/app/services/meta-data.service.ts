import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Dataset } from '../interfaces/dataset';
import { MetaDataAjaxService } from './ajax/meta-data-ajax.service';


@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  public datasetArr: Dataset[] = [];

  constructor(private metaDataAjaxService: MetaDataAjaxService) { }

  // Download the consortia's metadata
  public fetchMetadata(): Observable<Dataset[]> {
    const datasets$ = forkJoin([
      this.metaDataAjaxService.fetchHubmapMetadata(),
      this.metaDataAjaxService.fetchSparcMetadata()
    ]).pipe(
      map(([ds1, ds2]) => ds1.concat(ds2)),
      tap(datasets => this.datasetArr = datasets),
      catchError((err) => { console.error(err); return [[] as Dataset[]]; })
    );

    datasets$.subscribe({error: console.error});

    return datasets$;
  }
}
