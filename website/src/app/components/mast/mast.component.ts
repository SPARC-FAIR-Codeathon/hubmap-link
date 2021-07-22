import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiKeystoreService } from 'src/app/services/api-keystore.service';

@Component({
  selector: 'app-mast',
  templateUrl: './mast.component.html',
  styleUrls: ['./mast.component.css']
})
export class MastComponent implements OnInit {

  constructor(public router: Router, public apiKeystoreService:ApiKeystoreService) { }

  ngOnInit(): void {
  }

}
