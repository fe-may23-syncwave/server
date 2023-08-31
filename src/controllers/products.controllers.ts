import { Request, Response } from 'express';
import * as productsService from '../services/products.services';

const getAllProducts = (req: Request, res: Response) => {
  const queries = req.query;
  const productType = req.params.productType;

  const products = productsService.getAll(productType, queries);

  res.send(products);
};

export { getAllProducts };
