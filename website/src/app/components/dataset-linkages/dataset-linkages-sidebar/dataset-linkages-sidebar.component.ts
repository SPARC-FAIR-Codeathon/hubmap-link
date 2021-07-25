import { Component, OnInit } from '@angular/core';
import { MetaDataService } from 'src/app/services/meta-data.service';

@Component({
  selector: 'app-dataset-linkages-sidebar',
  templateUrl: './dataset-linkages-sidebar.component.html',
  styleUrls: ['./dataset-linkages-sidebar.component.css']
})
export class DatasetLinkagesSidebarComponent implements OnInit {

  constructor(public metaDataService: MetaDataService) { }

  

  ngOnInit(): void {
  }

}
