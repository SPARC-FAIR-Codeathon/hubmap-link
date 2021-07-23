import { fetchElasticSearch } from "./fetch-elastic-search";


export function fetchSparcDatasets(apiKey: string): Promise<any> {
  return fetchElasticSearch({}, 10, apiKey);
}
