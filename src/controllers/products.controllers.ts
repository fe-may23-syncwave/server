import { Request, Response } from 'express';
import { getAll, getOne } from '../services/products.services';

interface MyQuery {
  sortBy?: string;
  search?: string;
  page?: string;
  perPage?: string;
  category?: string;
}

export async function getAllProducts(req: Request, res: Response) {
  const {
    sortBy = '',
    search = '',
    page = '1',
    perPage = '4',
    category = '',
  }: MyQuery = req.query;

  if (
    typeof sortBy !== 'string' ||
    typeof perPage !== 'string' ||
    typeof page !== 'string' ||
    typeof search !== 'string'
  ) {
    res.sendStatus(422);
    return;
  }

  const products = await getAll({
    sortBy,
    search,
    page,
    perPage,
    category,
  });

  if (!products.length) {
    res.status(404).send('Products not found');

    return;
  }

  res.status(200).send(products);
}

export const getOneProduct = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundProduct = await getOne(itemId);

  if (!foundProduct) {
    res.status(404).send('Product not found');

    return;
  }

  res.status(200).send(foundProduct);
};
