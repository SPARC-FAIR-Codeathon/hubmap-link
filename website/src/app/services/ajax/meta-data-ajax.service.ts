import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MetaDataAjaxService {
  endpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

   public fetchSparcMetadata(): Observable<any> {
    return this.http.get(`${this.endpoint}/sparc-datasets?format=json-metadata`);
  }

   public fetchHubmapMetadata(): Observable<any> {
    return this.http.get(`${this.endpoint}/hubmap-datasets?format=json`);
  }
}
