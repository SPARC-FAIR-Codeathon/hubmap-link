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
}
