import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiKeystoreService } from '../api-keystore.service';

/*******************************************************************************************
 * @Author Samuel O'Blenes
 * @Date 7/15/21
 * This service retrieves data from remote sources.
 *******************************************************************************************/

@Injectable({
  providedIn: 'root'
})
export class SparcAsctbAjaxService {
  constructor(private http: HttpClient) { }

  /**********************************************************************
   * Returns a promise on the ajax call response
   **********************************************************************/
  public fetchGenericJson(uri: string) {
    return this.http.get(uri, {responseType: 'json'});
  }


  /***************************************************************************************************
   * Execute a request against scigraph for partonomy data in relationship to the provided identifier
   * Returns a promise on the ajax call response 
   * relationshipType: http://purl.obolibrary.org/obo/BFO_0000050
   ***************************************************************************************************/
   public fetchSparcPartonomy(organIdentifier: string, relationshipType: string, depth:number, apiKey: string) {
    let uri = 'https://scicrunch.org/api/1/scigraph/graph/neighbors/'
      + organIdentifier
      + '?depth=' 
      + depth 
      + '&blankNodes=false&relationshipType='
      + relationshipType
      + '&direction=INCOMING&entail=false&'
      + 'key=' + apiKey;
    return this.http.get(uri, {responseType: 'json'});
  }
}


