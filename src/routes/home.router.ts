import express from 'express';
export const homeRouter = express.Router();
import {
  getNewest,
  getBestDiscount,
  getHightPrice,
  getProductCounts,
} from '../controllers/home.controller';

/**
 * @swagger
 * /home/newest:
 *   get:
 *     summary: Get the newest products (limited to 12 items).
 *     description: Get a list of the newest products with a maximum limit of 12 items.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of the newest products (up to 12 items).
 */
homeRouter.get('/newest', getNewest);

/**
 * @swagger
 * /home/bestDiscount:
 *   get:
 *     summary: Get products with the best discounts (limited to 12 items).
 *     description: Get a list of products with the best discounts with a maximum limit of 12 items.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of the products with the best discounts (up to 12 items).
 */
homeRouter.get('/bestDiscount', getBestDiscount);

/**
 * @swagger
 * /home/hightPrice:
 *   get:
 *     summary: Get products with the hight price (limited to 12 items).
 *     description: Get a list of products with the hight price with a maximum limit of 12 items.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of the products with the hight price (up to 12 items).
 */
homeRouter.get('/hightPrice', getHightPrice);

/**
 * @swagger
 * /home/productCounts:
 *   get:
 *     summary: Get product counts for each category.
 *     description: Retrieves the count of products for each category.
 *     responses:
 *       200:
 *         description: Successful request. Returns an object with category product counts.
 */
homeRouter.get('/productCounts', getProductCounts);
