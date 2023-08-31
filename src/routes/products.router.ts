import express from 'express';
import * as productsController from '../controllers/products.controllers';

const router = express.Router();

router.get('/', productsController.getAllProducts);

export { router };
