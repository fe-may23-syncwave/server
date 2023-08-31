import express = require('express');
const router = express.Router();
import * as productsController from '../controllers/products.controllers';

router.get('/:productType', productsController.getAllProducts);

export { router };
