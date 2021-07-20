import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mast',
  templateUrl: './mast.component.html',
  styleUrls: ['./mast.component.css']
})
export class MastComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
