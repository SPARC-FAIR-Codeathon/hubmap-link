import { Express, Request, Response } from 'express';
import { fetchHuBMAPData } from '../functions/fetch-hubmap-data';


export function setupHuBMAPDatasetsRoute(app: Express): void {
  app.get('/hubmap-datasets', async (req: Request, res: Response) => {  
    const format = req.query.format as string;
    const token = req.query.token as string | undefined;
    try {
      const response = await fetchHuBMAPData(format, token);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.statusMessage = err;
      res.status(500).end();
    }
  });
}
