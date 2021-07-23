import cors from 'cors';
import express from 'express';
import path from 'path';
import { setupAsGraphRoute } from './routes/as-graph';
import { setupSparcDatasetsRoute } from './routes/sparc-datasets';
import { setupUberonClLinkRoute } from './routes/uberon-cl-links-route';


export const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/')));

// Global caching of responses
app.use(function (req, res, next) {
  res.set('Cache-control', 'public, max-age=300');
  next();
});

setupAsGraphRoute(app);
setupSparcDatasetsRoute(app);
setupUberonClLinkRoute(app);

app.listen(process.env.PORT || 5000);
