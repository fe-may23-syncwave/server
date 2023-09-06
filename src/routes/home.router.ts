import express from 'express';
export const homeRouter = express.Router();
import {
  getNewest,
  getBestDiscount,
  getHightPrice,
  getProductCounts
} from '../controllers/home.controller';

homeRouter.get('/newest', getNewest);
homeRouter.get('/bestDiscount', getBestDiscount);
homeRouter.get('/hightPrice', getHightPrice);
homeRouter.get('/productCounts', getProductCounts);
