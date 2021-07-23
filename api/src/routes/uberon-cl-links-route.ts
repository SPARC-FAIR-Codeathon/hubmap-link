import { Express, Request, Response } from 'express';
import { fetchSparcUberonToClMappings } from '../functions/fetch-uberon-cl-links';
import { apiKey } from './../functions/api-key';


export function setupUberonClLinkRoute(app: Express): void {
  app.get('/uberon-cl-links', async (req: Request, res: Response) => {  
    try {
      const response = await fetchSparcUberonToClMappings(apiKey);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.statusMessage = err;
      res.status(500).end();
    }
  });
}
