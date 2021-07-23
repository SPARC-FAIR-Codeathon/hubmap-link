import axios from 'axios';


export async function fetchCypher<T = any>(cypher: string, apiKey: string, limit: number): Promise<T[]> {
  // const endpoint = 'https://scicrunch.org/api/1/sparc-scigraph';
  const endpoint = 'https://scigraph-ontology.monarchinitiative.org/scigraph';
  const uri = `${endpoint}/cypher/execute?cypherQuery=${encodeURIComponent(cypher)}&limit=${limit}&api_key=${apiKey}`;

  const response = await axios.get<T[]>(uri, {
    responseType: 'json',
    headers: {
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
