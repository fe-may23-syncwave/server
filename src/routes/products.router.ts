import express from 'express';
import * as productsController from '../controllers/products.controllers';

export const productsRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products management
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get a list of products based on query parameters.
 *     description: Retrieves a list of products based on query parameters.
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         description: Sort products by a specific criteria.
 *         schema:
 *           type: string
 *       - in: query
 *         name: search
 *         description: Search products by a keyword.
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         description: Page number for pagination.
 *         schema:
 *           type: string
 *       - in: query
 *         name: perPage
 *         description: Number of products per page.
 *         schema:
 *           type: string
 *       - in: query
 *         name: category
 *         description: Filter products by category.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of products.
 *     tags: [Products]
 */

productsRouter.get('/', productsController.getAllProducts);

/**
 * @swagger
 * /products/{itemId}:
 *   get:
 *     summary: Get a product by ID.
 *     description: Retrieves a product by its unique ID.
 *     parameters:
 *       - in: path
 *         name: itemId
 *         description: ID of the product to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request. Returns the product with the specified ID.
 *       404:
 *         description: Product not found.
 *     tags: [Products]
 */
productsRouter.get('/:itemId', productsController.getOneProduct);
