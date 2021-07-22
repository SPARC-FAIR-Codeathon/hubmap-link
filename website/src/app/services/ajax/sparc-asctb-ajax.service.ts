import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private http: HttpClient) {
    // TODO: REMOVE ME
    this.fetchSparcUberonToClMappings(localStorage.getItem('SCICRUNCH_API_KEY')).toPromise().then(console.log);
  }

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
    const uri = 'https://scicrunch.org/api/1/sparc-scigraph/graph/neighbors/'
      + organIdentifier
      + '?depth='
      + depth
      + '&blankNodes=false&relationshipType='
      + relationshipType
      + '&direction=INCOMING&entail=false&'
      + 'key=' + apiKey;
    return this.http.get(uri, {responseType: 'json'});
  }

  public fetchCypher<T = any>(cypher: string, apiKey: string, limit: number): Observable<T[]> {
    const endpoint = 'https://scicrunch.org/api/1/sparc-scigraph';
    const uri = `${endpoint}/cypher/execute?cypherQuery=${encodeURI(cypher)}&limit=${limit}&api_key=${apiKey}`;
    return this.http.get<T[]>(uri, {responseType: 'json', headers: {'Content-type': 'application/json'}});
  }

  public fetchSparcUberonToClMappings(apiKey: string) {
    const query = `MATCH (u)-[r]->(cl) WHERE u.iri STARTS WITH 'http://purl.obolibrary.org/obo/UBERON_' AND cl.iri STARTS WITH 'http://purl.obolibrary.org/obo/CL_' RETURN u.iri, u.label, r.iri, r.lbl, cl.iri, cl.label`;
    return this.fetchCypher(query, apiKey, 1000);
  }
}
