import { Request, Response } from 'express';
import * as productsService from '../services/products.services';

const getAllProducts = (req: Request, res: Response) => {
  const products = productsService.getAll();

  res.send(products);
};

export { getAllProducts };
