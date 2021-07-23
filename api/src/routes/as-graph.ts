import { Express, Request, Response } from 'express';
import { apiKey } from '../functions/api-key';
import { fetchGraph } from '../functions/fetch-graph';


export function setupAsGraphRoute(app: Express): void {
  app.get('/as-graph/:organIdentifier', async (req: Request, res: Response) => {
    const organIdentifier = req.params.organIdentifier;
    try {
      const response = await fetchGraph(organIdentifier, 'http://purl.obolibrary.org/obo/BFO_0000050', 10, apiKey);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.statusMessage = err;
      res.status(500).end();
    }
  });
}
