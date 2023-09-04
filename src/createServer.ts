import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

import { connect } from './utils/db';

connect();

import { router as ProductsRouter } from './routes/products.router';
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

  app.use(authRouter);
  app.use('/users', userRouter);
  app.use('/products', ProductsRouter);
  app.use('/orders', orderRouter);

  app.use(errorMiddleware);

  return app;
}
