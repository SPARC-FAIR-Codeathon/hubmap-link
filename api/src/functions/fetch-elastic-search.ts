import axios from 'axios';


export interface ESResponse {
  hits: {
    total: number;
    hits: {
      _id: string;
      _source: any;
    }[];
  };
}

export async function fetchElasticSearch(query: any, limit: number, apiKey: string): Promise<ESResponse> {
  const endpoint = 'https://scicrunch.org/api/1/elastic/SPARC_PortalDatasets_pr/_search';
  const uri = `${endpoint}?api_key=${apiKey}`;
  query = { ...query, version: true, size: limit };

  const response = await axios.post<ESResponse>(uri, query, {
    responseType: 'json',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br'
    },
    decompress: true
  });

  if (response.status === 200 && response.data) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
}
