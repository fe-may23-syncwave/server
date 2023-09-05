import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

import { connect } from './utils/db';

connect();

import { productsRouter } from './routes/products.router';
import { phonesRouter } from './routes/phones.router';
import { tabletsRouter } from './routes/tablets.router';
import { accessoriesRouter } from './routes/accessories.router';
import { userRouter } from './routes/users.router';
import { authRouter } from './routes/auth.router';
import { orderRouter } from './routes/orders.router';
import { errorMiddleware } from './middlewares/errorMiddleware';

const CLIENT_URL = process.env.CLIENT_URL;

export function createServer() {
  const app = express()
    .use(cors({ origin: CLIENT_URL, credentials: true }))
    .use(cookieParser())
    .use(express.json())
    .get('/', (req, res) => {
      res.send('Product catalog API fe-may23-syncwave');
    });

  app
    .use('/products', productsRouter)
    .use('/phones', phonesRouter)
    .use('/tablets', tabletsRouter)
    .use('/accessories', accessoriesRouter);

  app.use(authRouter);
  app.use('/users', userRouter);
  app.use('/orders', orderRouter);

  app.use(errorMiddleware);

  return app;
}
