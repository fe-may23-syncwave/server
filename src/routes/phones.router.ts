'use strict';

import express from 'express';
export const phonesRouter = express.Router();
import { getAllPhones, getOnePhone } from '../controllers/phones.controllers';

/**
 * @swagger
 * tags:
 *   name: Phones
 *   description: Phones management
 */

/**
 * @swagger
 * /phones:
 *   get:
 *     summary: Get a list of phones.
 *     description: Retrieves a a list of phones.
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of phones.
 *     tags: [Phones]
 */

phonesRouter.get('/', getAllPhones);

/**
 * @swagger
 * /phones/{itemId}:
 *   get:
 *     summary: Get a phone by ID.
 *     description: Retrieves a phone by its unique ID.
 *     parameters:
 *       - in: path
 *         name: itemId
 *         description: ID of the phone to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request. Returns the phone with the specified ID.
 *       404:
 *         description: Phone not found.
 *     tags: [Phones]
 */
phonesRouter.get('/:id', getOnePhone);
