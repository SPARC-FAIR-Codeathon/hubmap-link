import { Component, OnInit } from '@angular/core';
import { Organ } from 'src/app/interfaces/organ';
import { AsctbCompareService } from 'src/app/services/asctb-compare.service';

@Component({
  selector: 'app-asctb-table-view',
  templateUrl: './asctb-table-view.component.html',
  styleUrls: ['./asctb-table-view.component.css']
})
export class AsctbTableViewComponent implements OnInit {

  constructor(public asctbCompareService: AsctbCompareService) { }

  public expandCellTypes: boolean = false; //When the user clicks the "more..." chip
  public displayedColumns: string[] = ['id', 'name', 'hubmap', 'sparc', 'cellTypes']; 

  ngOnInit(): void {
  }

  getOrganIdReadable(id:string): string{
    return (id.indexOf('SURROGATE_ID') > -1)? '<NONE>': id;
  }

}
