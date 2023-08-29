import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const CLIENT_URL = process.env.CLIENT_URL;

export function createServer() {
  const app = express();

  app.use(cors({ origin: CLIENT_URL }));

  return app;
}
