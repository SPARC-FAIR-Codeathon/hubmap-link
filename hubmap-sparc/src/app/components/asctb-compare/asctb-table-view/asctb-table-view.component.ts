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

  public displayedColumns: string[] = ['id', 'name', 'hubmap', 'sparc', 'cellTypes']; //'sharedCellTypes', 'hubmapCellTypes', 'sparcCellTypes', 'label'

  ngOnInit(): void {
  }

  sortByColumn(columnName: string){
    this.asctbCompareService.mergedTableArr.sort((a, b) => (a[columnName] > b[columnName]) ? 1 : ((b[columnName] > a[columnName]) ? -1 : 0));
  }
  
  getOrganIdReadable(id:string): string{
    return (id.indexOf('SURROGATE_ID') > -1)? '<NONE>': id;
  }

}
