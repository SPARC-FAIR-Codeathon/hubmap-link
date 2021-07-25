import { Component } from '@angular/core';
import { MetaDataService } from '../../../services/meta-data.service';


@Component({
  selector: 'app-dataset-linkages-sidebar',
  templateUrl: './dataset-linkages-sidebar.component.html',
  styleUrls: ['./dataset-linkages-sidebar.component.css']
})
export class DatasetLinkagesSidebarComponent {

  constructor(public metaDataService: MetaDataService) { }
}
