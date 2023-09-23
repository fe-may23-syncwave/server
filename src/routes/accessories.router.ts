import express from 'express';
import * as accessoriesController from '../controllers/accessories.controllers';

export const accessoriesRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Accessories
 *   description: Accessories management
 */

/**
 * @swagger
 * /accessories:
 *   get:
 *     summary: Get a list of accessories.
 *     description: Retrieves a a list of accessories.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of accessories.
 *     tags: [Accessories]
 */
accessoriesRouter.get('/', accessoriesController.getAllAccessories);

/**
 * @swagger
 * /accessories/{itemId}:
 *   get:
 *     summary: Get a accessory by ID.
 *     description: Retrieves a accessory by its unique ID.
 *     parameters:
 *       - in: path
 *         name: itemId
 *         description: ID of the accessory to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request. Returns the accessory with the specified ID.
 *       404:
 *         description: Phone not found.
 *     tags: [Accessories]
 */
accessoriesRouter.get('/:id', accessoriesController.getOneAccessory);
