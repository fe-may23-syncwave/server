import express from 'express';
import * as tabletsController from '../controllers/tablets.controllers';

export const tabletsRouter = express.Router();

tabletsRouter.get('/', tabletsController.getAllTablets);
tabletsRouter.get('/:id', tabletsController.getOneTablet);
