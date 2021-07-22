import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiKeystoreService } from 'src/app/services/api-keystore.service';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent implements OnInit {

  public scicrunchApiKey = null;
  constructor(private apiKeystoreService: ApiKeystoreService,
    public router: Router) { }

  ngOnInit(): void {
  }

  setKey(){
    this.apiKeystoreService.sparcSciCrunchApiKey = this.scicrunchApiKey;
    this.router.navigate(['asctb-compare']);
  }

}
