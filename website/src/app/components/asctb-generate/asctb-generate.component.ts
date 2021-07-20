import { Component, OnInit } from '@angular/core';
import { AsctbCompareService } from 'src/app/services/asctb-compare.service';

@Component({
  selector: 'app-asctb-generate',
  templateUrl: './asctb-generate.component.html',
  styleUrls: ['./asctb-generate.component.css']
})
export class AsctbGenerateComponent implements OnInit {

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
    console.log('export click event');
    let organIdentifier = (this.selections.chooseFromList) ? 
      this.selections.selectedOrgan.id : this.selections.inputOrganIdentifier;
    let fileName = organIdentifier+".csv"

    //Short circuit if nothing was selected
    if(!organIdentifier) return;

    //@TODO
    this.downloadFile(fileName);
  }




  /**************************************************************************************************************************
   * Utility function to download a file. Adapted from:
   * https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
   **************************************************************************************************************************/
  private downloadFile(fileName){
    const rows = [
      ["name1", "city1", "some other info"],
      ["name2", "city2", "more info"]
    ];
  
    let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
  }
}
