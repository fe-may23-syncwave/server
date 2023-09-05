import { Request, Response } from 'express';
import { getAll, getProductById } from '../services/products.services';

interface MyQuery {
  sortBy?: string;
  search?: string;
  page?: string;
  perPage?: string;
}

export async function getAllProducts(req: Request, res: Response) {
  const {
    sortBy = '',
    search = '',
    page = '1',
    perPage = 'all',
  }: MyQuery = req.query;

  const products = await getAll({
    sortBy,
    search,
    page,
    perPage,
  });

  res.send(products);
}

export const getOneProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundProduct = await getProductById(+id);

  if (!foundProduct) {
    res.status(404).send('Product not found');

    return;
  }

  res.status(200).send(foundProduct);
};
