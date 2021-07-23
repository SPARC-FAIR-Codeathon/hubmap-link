import { Express, Request, Response } from 'express';
import { createSparcAsctbCsv } from '../functions/sparc-asctb-csv';
import { apiKey } from '../functions/api-key';


export function setupAsctbCsvRoute(app: Express): void {
  app.get('/asctb/:organIdentifier', async (req: Request, res: Response) => {
    const organIdentifier = req.params.organIdentifier;
    try {
      const response = await createSparcAsctbCsv(organIdentifier, apiKey);
      res.set('Content-Type', 'text/csv');
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.statusMessage = err;
      res.status(500).end();
    }
  });
}
