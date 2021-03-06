import { Express, Request, Response } from 'express';
import { fetchSparcDatasets } from '../functions/fetch-sparc-data';
import { apiKey } from '../functions/api-key';


export function setupSparcDatasetsRoute(app: Express): void {
  app.get('/sparc-datasets', async (req: Request, res: Response) => {  
    const format = req.query.format as string;
    try {
      const response = await fetchSparcDatasets(apiKey, format);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.statusMessage = err;
      res.status(500).end();
    }
  });
}
