import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasetMetadataService {

  constructor(private http: HttpClient) { }


  /***************************************************************************************************
   * Execute a request against elastic search for 
   ***************************************************************************************************/
   public fetchHubmapMetadata() {
    let uri = 'https://search.api.hubmapconsortium.org/entities/search';
    return this.http.post(uri, {
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
    }, {responseType: 'json'});
  }


  public fetchSparcMetadata(apiKey:string) {
    let uri = 'https://scicrunch.org/api/1/elastic/SPARC_PortalDatasets_pr/_search?api_key='+apiKey;
    return this.http.post(uri, {
      version: true,
      size: 10000
    }, {responseType: 'json'});
  }
}
