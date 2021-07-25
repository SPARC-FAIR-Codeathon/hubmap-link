import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Dataset } from '../../interfaces/dataset';

@Injectable({
  providedIn: 'root'
})
export class MetaDataAjaxService {
  endpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

   public fetchSparcMetadata(): Observable<Dataset[]> {
    return this.http.get<Dataset[]>(`${this.endpoint}/sparc-datasets?format=json-metadata`);
  }

   public fetchHubmapMetadata(): Observable<Dataset[]> {
    return this.http.get<Dataset[]>(`${this.endpoint}/hubmap-datasets?format=json-metadata`);
  }
}
