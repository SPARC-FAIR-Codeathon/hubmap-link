import { Component, OnInit } from '@angular/core';
import { AsctbCompareService } from 'src/app/services/asctb-compare.service';

@Component({
  selector: 'app-asctb-compare',
  templateUrl: './asctb-compare.component.html',
  styleUrls: ['./asctb-compare.component.css']
})
export class AsctbCompareComponent implements OnInit {

  constructor(public asctbCompareService: AsctbCompareService) { }

  ngOnInit(): void {
  }

}
