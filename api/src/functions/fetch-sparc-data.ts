import { fetchElasticSearch } from './fetch-elastic-search';
import { sparcResponseAsJsonLd } from './sparc-data';


export async function fetchSparcDatasets(apiKey: string, format: string): Promise<any> {
  const debug = format && format.includes('debug');
  const esData = await fetchElasticSearch({
    query: {
      query_string: {
        query: 'organisms.scaffold.species.name:((human)) OR organisms.subject.species.name:((human))'
      }
    }
  }, 1000, apiKey);
  switch (format) {
    case 'json-metadata':
    case 'json-metadata-debug':
      const data = sparcResponseAsJsonLd(esData, true);
      const metadata: any[] = [];
      (data['@graph'] as any[]).forEach(row => row.samples.filter((s: any) => !!s.meta).forEach((s: any) => metadata.push(s.meta)));
      return metadata;
    case 'jsonld':
    case 'jsonld-debug':
      return sparcResponseAsJsonLd(esData, debug);
    default:
      return esData;
  }
}
