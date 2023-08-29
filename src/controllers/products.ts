import { Request, Response } from 'express';
import * as productsService from '../services/products';

const getAllProducts = (req: Request, res: Response) => {
  const products = productsService.getAll();

  res.send(products);
};

export {
  getAllProducts,
};

