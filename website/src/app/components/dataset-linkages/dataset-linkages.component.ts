import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../services/meta-data.service';


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
}
