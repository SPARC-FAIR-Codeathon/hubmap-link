import { Component } from '@angular/core';
import { MetaDataService } from '../../../services/meta-data.service';


@Component({
  selector: 'app-dataset-linkages-table-view',
  templateUrl: './dataset-linkages-table-view.component.html',
  styleUrls: ['./dataset-linkages-table-view.component.css']
})
export class DatasetLinkagesTableViewComponent {

  constructor(public metaDataService:MetaDataService) { }

  getObjectKeys(obj: unknown): string[] {
    return Object.keys(obj);
  }
}
