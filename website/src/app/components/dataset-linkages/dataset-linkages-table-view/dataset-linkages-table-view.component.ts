import { Component, OnInit } from '@angular/core';
import { MetaDataService } from 'src/app/services/meta-data.service';

@Component({
  selector: 'app-dataset-linkages-table-view',
  templateUrl: './dataset-linkages-table-view.component.html',
  styleUrls: ['./dataset-linkages-table-view.component.css']
})
export class DatasetLinkagesTableViewComponent implements OnInit {

  constructor(public metaDataService:MetaDataService) { }

  ngOnInit(): void {
  }

  getObjectKeys(obj:any):string[]{
    return Object.keys(obj);
  }
}
