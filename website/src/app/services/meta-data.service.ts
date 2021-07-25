import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

import { Dataset } from '../interfaces/dataset';
import { MetaDataAjaxService } from './ajax/meta-data-ajax.service';

// Human-readable data status string
export type MetadataLoadingStatus = 'Not ready' | 'Loading' | 'Ready' | 'Error';

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
  // Currently loaded Datasets
  datasetArr: Dataset[] = [];

  // View type currently selected by the user
  selectedViewType: string;

  // Human-readable data status string
  dataLoadStatus: MetadataLoadingStatus = 'Not ready';

  // Dataset summary statistics
  datasetCountSparc = 0;
  datasetCountHubmap = 0;

  constructor(private metaDataAjaxService: MetaDataAjaxService) { }

  // Download the consortia's metadata
  fetchMetadata(): void {
    // Reset the data references and stats
    this.dataLoadStatus = 'Loading';
    this.datasetCountSparc = 0;
    this.datasetCountHubmap = 0;

    // Fetch data
    const datasets$ = forkJoin([
      this.metaDataAjaxService.fetchHubmapMetadata(),
      this.metaDataAjaxService.fetchSparcMetadata()
    ]).subscribe({
      next: ([hubmap, sparc]) => {
        this.setDatasets('Ready', hubmap, sparc);
      },
      error: (err) => {
        // Set error state
        this.setDatasets('Error');
        console.error(err);
      }
    });
  }

  private setDatasets(status: MetadataLoadingStatus, hubmap: Dataset[] = [], sparc: Dataset[] = []): void {
    this.dataLoadStatus = status;
    this.datasetCountHubmap = hubmap.length;
    this.datasetCountSparc = sparc.length;
    this.datasetArr = sparc.concat(hubmap);
  }
}
