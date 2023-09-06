/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

import { connect } from './utils/db';

connect();

import { mainPageRouter } from './routes/mainPage.router';
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
  const app = express();

  const whitelist = [
    CLIENT_URL,
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ];

  const corsOptions = {
    origin: function (origin: any, callback: any) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        console.log(origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  };

  app.use(cors(corsOptions));

  // app.use(cors({ origin: CLIENT_URL, credentials: true }));
  app.use(cookieParser());
  app.use(express.json());
  app.get('/', (req, res) => {
    res.send('✨Syncwave Server✨');
  });

  app
    .use('/home', mainPageRouter)
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
