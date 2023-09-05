import express from 'express';
import { catchError } from '../middlewares/catchError';
import { orderController } from '../controllers/order.controller';
// import { authMiddleware } from '../middlewares/authMiddleware';

export const orderRouter = express.Router();

orderRouter.get(
  '/',
  // catchError(authMiddleware),
  catchError(orderController.getAll),
);

orderRouter.post(
  '/',
  // catchError(authMiddleware),
  catchError(orderController.create),
);

orderRouter.get(
  '/:id',
  // catchError(authMiddleware),
  catchError(orderController.getById),
);

orderRouter.delete(
  '/:id',
  // catchError(authMiddleware),
  catchError(orderController.removeById),
);
