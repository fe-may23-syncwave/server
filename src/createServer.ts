import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import { connect } from './utils/db';

connect();

import { router as ProductsRouter } from './routes/products.router';

const CLIENT_URL = process.env.CLIENT_URL;

export function createServer() {
  const app = express()
    .use(cors({ origin: CLIENT_URL }))
    .use(express.json());

  app.use('/products', ProductsRouter);

  return app;
}
