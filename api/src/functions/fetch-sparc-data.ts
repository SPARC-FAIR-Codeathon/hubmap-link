import { fetchElasticSearch } from './fetch-elastic-search';
import { sparcResponseAsJsonLd } from './sparc-data';


export async function fetchSparcDatasets(apiKey: string, debug = true): Promise<any> {
  const esData = await fetchElasticSearch({
    query: {
      query_string: {
        query: 'organisms.scaffold.species.name:((human)) OR organisms.subject.species.name:((human))'
      }
    }
  }, 1000, apiKey);
  return sparcResponseAsJsonLd(esData, debug);
}
