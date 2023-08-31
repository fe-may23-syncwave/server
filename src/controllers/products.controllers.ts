import { Request, Response } from 'express';
import * as productsService from '../services/products.services';

const getAllProducts = (req: Request, res: Response) => {
  const queries = req.query;
  productsService.getAll(queries)
    .then (data => res.send(data));
};

export { getAllProducts };
