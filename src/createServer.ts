/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
dotenv.config();

import { connect } from './utils/db';

connect();

import { homeRouter } from './routes/home.router';
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

  const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: '✨Syncwave Server✨',
        version: '1.0.0',
        description: 'API documentation for Nice gadgets store application.',
      },
      servers: [
        {
          url: 'http://localhost:5000',
        },
      ],
    },
    apis: ['./src/routes/*.ts'],
  };

  const swaggerSpec = swaggerJsdoc(swaggerOptions);

  const whitelist = [
    CLIENT_URL,
    'http://localhost:3000',
    'http://localhost:5000',
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
    .use('/home', homeRouter)
    .use('/products', productsRouter)
    .use('/phones', phonesRouter)
    .use('/tablets', tabletsRouter)
    .use('/accessories', accessoriesRouter);

  app.use(authRouter);
  app.use('/users', userRouter);
  app.use('/orders', orderRouter);

  app.use(errorMiddleware);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  return app;
}
