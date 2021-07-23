import compression from 'compression';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { setupAsGraphRoute } from './routes/as-graph';
import { setupAsctbCsvRoute } from './routes/asctb-csv';
import { setupHuBMAPDatasetsRoute } from './routes/hubmap-data';
import { setupSparcDatasetsRoute } from './routes/sparc-datasets';
import { setupUberonClLinkRoute } from './routes/uberon-cl-links-route';
import { routeCache } from './utils/route-caching';


export const app = express();
app.use(cors());
app.use(compression());

// non-json routes
app.use(express.static(path.join(__dirname, '../public/')));
setupAsctbCsvRoute(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('json spaces', 2);
app.use(routeCache(12000));

// json routes
setupAsGraphRoute(app);
setupSparcDatasetsRoute(app);
setupHuBMAPDatasetsRoute(app);
setupUberonClLinkRoute(app);

app.listen(process.env.PORT || 5000);
