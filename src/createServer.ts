import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router as ProductsRouter } from './routes/products.router';

dotenv.config();

const CLIENT_URL = process.env.CLIENT_URL;

export function createServer() {
  const app = express();

  app.use(cors({ origin: CLIENT_URL }));

  app.use('/phones', express.json(), ProductsRouter);

  return app;
}
