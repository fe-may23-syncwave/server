import express from 'express';
import * as accessoriesController from '../controllers/accessories.controllers';

export const accessoriesRouter = express.Router();

accessoriesRouter.get('/', accessoriesController.getAllAccessories);
accessoriesRouter.get('/:id', accessoriesController.getOneAccessory);
