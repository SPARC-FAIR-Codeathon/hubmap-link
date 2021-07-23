import axios from 'axios';


export interface Graph {
  nodes: any[];
  edges: any[];
}

export async function fetchGraph(organIdentifier: string, relationshipType: string, depth:number, apiKey: string): Promise<Graph> {
  const endpoint = 'https://scicrunch.org/api/1/sparc-scigraph';
  const uri = `${endpoint}/graph/neighbors/${organIdentifier}?depth=${depth}&blankNodes=false&relationshipType=${relationshipType}&direction=INCOMING&entail=false&key=${apiKey}`;

  const response = await axios.get<Graph>(uri, {
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
