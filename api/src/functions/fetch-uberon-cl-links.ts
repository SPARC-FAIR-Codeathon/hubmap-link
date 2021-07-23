import { isString } from 'lodash';
import { parse } from 'papaparse';
import { fetchCypher } from './fetch-cypher';


export async function fetchSparcUberonToClMappings(apiKey: string): Promise<any[]> {
  const query = `
    MATCH (u)-[r]->(cl)
    WHERE
      u.iri STARTS WITH 'http://purl.obolibrary.org/obo/UBERON_' 
      AND cl.iri STARTS WITH 'http://purl.obolibrary.org/obo/CL_'
    RETURN u.iri, u.label, r.iri, r.lbl, cl.iri, cl.label
  `;
  const data = await fetchCypher(query, apiKey, 10000);

  // https://scicrunch.org/api/1/sparc-scigraph only returns plain text when 
  // it should be returning json. This subroutine deals with the oddity for
  // that endpoint.
  if (isString(data)) {
    const dataRows = (parse(data, {delimiter: '|'}).data as string[][])
      .filter(r => r.length === 8)
      .map(r => r.map(s => s.trim().replace(/\"/g, '')).slice(1, -1));

    return dataRows.slice(1).map(r => {
      const item = {} as Record<string, string>;
      r.forEach((value, index) => item[dataRows[0][index]] = value);
      return item;
    });
  }
  return data;
}
