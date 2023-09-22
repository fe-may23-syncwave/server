'use strict';

import { Request, Response } from 'express';
import {
  getBestDiscount12Products,
  getCategoryProductCounts,
  getHightPrice12Products,
  getNewest12Products,
} from '../services/home.services';
/**
 * @swagger
 * /home/newest:
 *   get:
 *     summary: Get the newest products (limited to 12 items).
 *     description: Get a list of the newest products with a maximum limit of 12 items.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of the newest products (up to 12 items).
 *    tags: [Home]
 */

export const getNewest = async (req: Request, res: Response) => {
  const newest = await getNewest12Products();

  res.send({ newest });
};

/**
 * @swagger
 * /home/bestDiscount:
 *   get:
 *     summary: Get products with the best discounts (limited to 12 items).
 *     description: Get a list of products with the best discounts with a maximum limit of 12 items.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of the products with the best discounts (up to 12 items).
 *    tags: [Home]
 */
export const getBestDiscount = async (req: Request, res: Response) => {
  const bestDiscount = await getBestDiscount12Products();

  res.send({ bestDiscount });
};

/**
 * @swagger
 * /home/hightPrice:
 *   get:
 *     summary: Get products with the hight price (limited to 12 items).
 *     description: Get a list of products with the hight price with a maximum limit of 12 items.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of the products with the hight price (up to 12 items).
 *     tags: [Home]
 */
export const getHightPrice = async (req: Request, res: Response) => {
  const hightPrice = await getHightPrice12Products();

  res.send({ hightPrice });
};

/**
 * @swagger
 * /home/productCounts:
 *   get:
 *     summary: Get product counts for each category.
 *     description: Retrieves the count of products for each category.
 *     responses:
 *       200:
 *         description: Successful request. Returns an object with category product counts.
 *
 */
export const getProductCounts = async (req: Request, res: Response) => {
  const counts = await getCategoryProductCounts();

  res.send({ counts });
};
