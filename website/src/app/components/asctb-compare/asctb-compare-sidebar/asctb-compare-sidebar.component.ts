import { Component, OnInit } from '@angular/core';
import { Organ } from 'src/app/interfaces/organ';
import { AsctbCompareService } from 'src/app/services/asctb-compare.service';

@Component({
  selector: 'app-asctb-compare-sidebar',
  templateUrl: './asctb-compare-sidebar.component.html',
  styleUrls: ['./asctb-compare-sidebar.component.css']
})
export class AsctbCompareSidebarComponent implements OnInit {

  constructor(public asctbCompareService: AsctbCompareService) {
    
  }

  ngOnInit(): void {
    //Execute initial load after render
    this.asctbCompareService.loadOrganData();
  }


}
