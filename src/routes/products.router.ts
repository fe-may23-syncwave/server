import express from 'express';
import * as productsController from '../controllers/products.controllers';

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:productId', productsController.getOneProduct);

export { router };
