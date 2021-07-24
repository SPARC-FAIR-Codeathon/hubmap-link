import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mast',
  templateUrl: './mast.component.html',
  styleUrls: ['./mast.component.css']
})
export class MastComponent {
  constructor(public router: Router) { }
}
