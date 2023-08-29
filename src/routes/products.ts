import express = require('express');
const router = express.Router();
import * as productsController from '../controllers/products';

router.get('/', productsController.getAllProducts);

export { router };
