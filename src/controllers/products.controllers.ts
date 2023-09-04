import { Request, Response } from 'express';
import * as productsService from '../services/products.services';

const getAllProducts = (req: Request, res: Response) => {
  const queries = req.query;
  productsService.getAll(queries).then((data) => res.send(data));
};

const getOneProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundProduct = await productsService.getProductById(+id);

  if (!foundProduct) {
    res.status(404).send('Phone not found');

    return;
  }

  res.status(200).send(foundProduct);
};

export { getAllProducts, getOneProduct };
