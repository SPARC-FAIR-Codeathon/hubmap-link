import { Component, OnInit } from '@angular/core';
import { AsctbCompareService } from 'src/app/services/asctb-compare.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-asctb-generate',
  templateUrl: './asctb-generate.component.html',
  styleUrls: ['./asctb-generate.component.css']
})
export class AsctbGenerateComponent implements OnInit {
  endpoint = environment.apiEndpoint;

  constructor(public asctbCompareService: AsctbCompareService) { }

  public selections = {
    chooseFromList: true,
    inputOrganIdentifier: null, //Organ identifier from the input
    selectedOrgan: null //Organ chosen from the select control
  }

  ngOnInit(): void {
    if(this.asctbCompareService.organTypes && this.asctbCompareService.organTypes.length > 0){
      this.selections.selectedOrgan = this.asctbCompareService.organTypes[0];
    }
  }


  exportClick(): void {
    let organIdentifier = (this.selections.chooseFromList) ? 
      this.selections.selectedOrgan.id : this.selections.inputOrganIdentifier;
    let url = `${this.endpoint}/asctb/${organIdentifier}?format=csv`;
    window.open(url);
  }

  /*
  exportClick(): void {
    let organIdentifier = (this.selections.chooseFromList) ? 
      this.selections.selectedOrgan.id : this.selections.inputOrganIdentifier;
    let fileName = organIdentifier+".csv"

    //Short circuit if nothing was selected
    if(!organIdentifier) return;
    //Generate the local csv file
    this.asctbGenerateService.generateAsctbDataForExport(organIdentifier, this.downloadFile);

  }
  */

  /**************************************************************************************************************************
   * Utility function to download a file. Adapted from:
   * https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
   **************************************************************************************************************************/
  /*
  private downloadFile(fileName:string, csvStr:string){
    let csvContent = "data:text/csv;charset=utf-8," + csvStr;
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link); // Required for FF
    link.click();
  }
  */
}
