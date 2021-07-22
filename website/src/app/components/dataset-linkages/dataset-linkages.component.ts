import { Component, OnInit } from '@angular/core';
import { DatasetMetadataService } from 'src/app/services/ajax/dataset-metadata.service';
import { ApiKeystoreService } from 'src/app/services/api-keystore.service';

@Component({
  selector: 'app-dataset-linkages',
  templateUrl: './dataset-linkages.component.html',
  styleUrls: ['./dataset-linkages.component.css']
})
export class DatasetLinkagesComponent implements OnInit {

  constructor(private datasetMetadataService: DatasetMetadataService,
    private apiKeystoreService:ApiKeystoreService) { }

  ngOnInit(): void {
    this.datasetMetadataService.fetchHubmapMetadata().subscribe({
      next: (response:any) => { 
        console.log('Hubmap Metadata');
        console.dir(response);
      },
      error: (error) => { console.error(error); }
    });



    this.datasetMetadataService.fetchSparcMetadata(this.apiKeystoreService.sparcSciCrunchApiKey).subscribe({
      next: (response:any) => { 
        console.log('Sparc Metadata');
        console.dir(response);
      },
      error: (error) => { console.error(error); }
    });
    
  }

}
