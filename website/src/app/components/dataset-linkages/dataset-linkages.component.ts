import { Component, OnInit } from '@angular/core';
import { MetaDataAjaxService } from 'src/app/services/ajax/meta-data-ajax.service';
import { MetaDataService } from 'src/app/services/meta-data.service';

@Component({
  selector: 'app-dataset-linkages',
  templateUrl: './dataset-linkages.component.html',
  styleUrls: ['./dataset-linkages.component.css']
})
export class DatasetLinkagesComponent implements OnInit {

  constructor(public metaDataService: MetaDataService) { }

  ngOnInit(): void {
    this.metaDataService.fetchMetadata();
  }

  getObjectKeys(obj:any):string[]{
    return Object.keys(obj);
  }
}
