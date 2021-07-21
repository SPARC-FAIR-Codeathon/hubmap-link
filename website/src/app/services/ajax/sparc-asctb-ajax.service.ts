import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
   public fetchSparcPartonomy(organIdentifier: string, relationshipType: string) {
    let uri = 'https://scicrunch.org/api/1/scigraph/graph/neighbors/'
      + organIdentifier
      + '?depth=8&blankNodes=false&relationshipType='
      + relationshipType
      + '&direction=INCOMING&entail=false&'
      + 'key=SB5jsflPjsQcmfPqB1zS3XuDNx3sfd19';
    return this.http.get(uri, {responseType: 'json'});
  }
}


