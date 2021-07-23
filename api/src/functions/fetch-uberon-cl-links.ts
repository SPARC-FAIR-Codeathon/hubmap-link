import { fetchCypher } from "./fetch-cypher";


export function fetchSparcUberonToClMappings(apiKey: string): Promise<any[]> {
  const query = `
    MATCH (u)-[r]->(cl)
    WHERE
      u.iri STARTS WITH 'http://purl.obolibrary.org/obo/UBERON_' 
      AND cl.iri STARTS WITH 'http://purl.obolibrary.org/obo/CL_'
    RETURN u.iri, u.label, r.iri, r.lbl, cl.iri, cl.label
  `;
  return fetchCypher(query, apiKey, 10);
}
