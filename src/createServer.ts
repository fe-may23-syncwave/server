import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import { connect } from './utils/db';

connect();

import { productsRouter } from './routes/products.router';
import { phonesRouter } from './routes/phones.router';
import { tabletsRouter } from './routes/tablets.router';
import { accessoriesRouter } from './routes/accessories.router';

// const CLIENT_URL = process.env.CLIENT_URL;

export function createServer() {
  const app = express()
    .use(cors({ origin: '*' }))
    .use(express.json())
    .use('/', productsRouter);

  app
    .use('/products', productsRouter)
    .use('/phones', phonesRouter)
    .use('/tablets', tabletsRouter)
    .use('/accessories', accessoriesRouter);

  return app;
}
