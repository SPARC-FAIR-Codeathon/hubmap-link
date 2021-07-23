import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaDataAjaxService {
  constructor(private http: HttpClient) { }

  /***************************************************************************************************
   * Pull down elastic search data set metadata from Sparc
   * @Return promise
   ***************************************************************************************************/
   public fetchSparcMetadata(apiKey: string) {
    let uri = 'https://scicrunch.org/api/1/elastic/SPARC_PortalDatasets_pr/_search?api_key='+apiKey;
    const body = {
      version: true,
      size: 10000
    };
    //Force text/plain to work around the scicrunch CORS issue caused by preflight check
    return this.http.post(uri, body, {headers : new HttpHeaders({ 'Content-Type': 'text/plain' })}); 
  }

  /***************************************************************************************************
   * Pull down elastic search data set metadata from Hubmap
   * @Return promise
   ***************************************************************************************************/
   public fetchHubmapMetadata() {
    let uri = 'https://search.api.hubmapconsortium.org/entities/search';
    const body = {
      version: true,
      size: 10000,
      _source: {
        excludes: [
          'donor', 'immediate_ancestors', 'immediate_descendants', 'origin_sample',
          'portal_metadata_upload_files', 'portal_uploaded_image_files', 'ancestor_ids', 'descendant_ids'
        ]
      },
      stored_fields: ['*'],
      script_fields: {},
      docvalue_fields: [],
      query: { exists: { field: 'rui_location' } }
    };
    return this.http.post(uri, body);
  }
}
