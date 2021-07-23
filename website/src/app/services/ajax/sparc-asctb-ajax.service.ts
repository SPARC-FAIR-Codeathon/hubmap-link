import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


/*******************************************************************************************
 * @Author Samuel O'Blenes
 * @Date 7/15/21
 * This service retrieves data from remote sources.
 *******************************************************************************************/

@Injectable({
  providedIn: 'root'
})
export class SparcAsctbAjaxService {
  endpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  /**********************************************************************
   * Returns a promise on the ajax call response
   **********************************************************************/
  public fetchGenericJson<T = any>(uri: string): Observable<T> {
    return this.http.get<T>(uri, {responseType: 'json'});
  }

  public fetchSparcPartonomy(organIdentifier: string, relationshipType: string, depth:number, apiKey: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.endpoint}/as-graph/${organIdentifier}`);
  }

  public fetchSparcUberonToClMappings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.endpoint}/uberon-cl-links`);
  }
}
