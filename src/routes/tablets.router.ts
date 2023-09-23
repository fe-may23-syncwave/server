import express from 'express';
import * as tabletsController from '../controllers/tablets.controllers';

export const tabletsRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tablets
 *   description: Tablets management
 */

/**
 * @swagger
 * /tablets:
 *   get:
 *     summary: Get a list of tablets.
 *     description: Retrieves a a list of tablets.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of tablets.
 *     tags: [Tablets]
 */
tabletsRouter.get('/', tabletsController.getAllTablets);

/**
 * @swagger
 * /tablets/{itemId}:
 *   get:
 *     summary: Get a phone by ID.
 *     description: Retrieves a tablet by its unique ID.
 *     parameters:
 *       - in: path
 *         name: itemId
 *         description: ID of the tablet to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request. Returns the tablet with the specified ID.
 *       404:
 *         description: Tablet not found.
 *     tags: [Tablets]
 */
tabletsRouter.get('/:id', tabletsController.getOneTablet);
