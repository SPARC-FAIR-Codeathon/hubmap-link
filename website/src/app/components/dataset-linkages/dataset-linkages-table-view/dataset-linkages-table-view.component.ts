import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MetaDataService } from '../../../services/meta-data.service';
import { DatasetModalComponent } from './dataset-modal/dataset-modal.component';


@Component({
  selector: 'app-dataset-linkages-table-view',
  templateUrl: './dataset-linkages-table-view.component.html',
  styleUrls: ['./dataset-linkages-table-view.component.css']
})
export class DatasetLinkagesTableViewComponent {

  constructor(public metaDataService:MetaDataService,
    public matDialog: MatDialog) { }

  public expandDescriptions: boolean = false;
  public displayedColumns: string[] = ['name', 'description', 'anatomicalStructureId', 'anatomicalStructureName', 'dataType', 'publicationStatus', 'groupName', 'consortium']; 

  public tableFormatStringArray(arr: string[]):any{
    if(!arr.length) return arr;
    if(arr.length > 3){
      return arr.slice(0, 3).join(', ') + '...';
    }
    return arr.join(', ');
  }

  public presentDataSource(ds: any){
    console.log('click event');
    this.matDialog.open(DatasetModalComponent, {
      data: ds
    });
  }
}
