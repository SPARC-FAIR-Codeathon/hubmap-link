import { Express, Request, Response } from 'express';
import { fetchSparcDatasets } from '../functions/fetch-datasets';
import { apiKey } from '../functions/api-key';


export function setupSparcDatasetsRoute(app: Express): void {
  app.get('/sparc-datasets', async (req: Request, res: Response) => {  
    try {
      const response = await fetchSparcDatasets(apiKey);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.statusMessage = err;
      res.status(500).end();
    }
  });
}
