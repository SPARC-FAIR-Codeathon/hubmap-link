import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dataset-modal',
  templateUrl: './dataset-modal.component.html',
  styleUrls: ['./dataset-modal.component.css']
})
export class DatasetModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public ds: any) { 
    this.dataSource = ds;
  }

  dataSource = null;

  ngOnInit(): void {}

}
