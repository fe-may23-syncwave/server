import { Request, Response } from 'express';
import * as productsService from '../services/products.services';

const getAllProducts = (req: Request, res: Response) => {
  const queries = req.query;
  productsService.getAll(queries).then((data) => res.send(data));
};

const getOneProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundPhone = await productsService.getProductById(+id);

  if (!foundPhone) {
    res.status(404).send('Phone not found');

    return;
  }

  res.status(200).send(foundPhone);
};

export { getAllProducts, getOneProduct };
