import express from 'express';
import { catchError } from '../middlewares/catchError';
import { orderController } from '../controllers/order.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

export const orderRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Orders management
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     description: Get a list of all orders along with user information.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of all orders.
 *     tags: [Orders]
 */
orderRouter.get(
  '/',
  catchError(authMiddleware),
  catchError(orderController.getAll),
);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     description: Create a new order with the specified data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               totalPrice:
 *                 type: number
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful request. Returns the created order.
 *     tags: [Orders]
 */
orderRouter.post(
  '/',
  catchError(authMiddleware),
  catchError(orderController.create),
);


/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     description: Get information about an order by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Unique ID of the order to retrieve.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful request. Returns information about the order.
 *       404:
 *         description: Order not found.
 *     tags: [Orders]
 */
orderRouter.get(
  '/:id',
  catchError(authMiddleware),
  catchError(orderController.getById),
);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     description: Delete an order by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Unique ID of the order to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful request. The order has been deleted.
 *       404:
 *         description: Order not found.
 *     tags: [Orders]
 */
orderRouter.delete(
  '/:id',
  catchError(authMiddleware),
  catchError(orderController.removeById),
);
