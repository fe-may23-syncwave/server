import { Request, Response } from 'express';
import { getAll, getProductById } from '../services/products.services';


export async function getAllProducts(req: Request, res: Response) {
  const query = req.query;
  const {
    sortBy = '',
    search = '',
    page = '1',
    perPage = 'all',
  } = query;

  const products = await getAll({
    sortBy: sortBy as string,
    search: search as string,
    page: page as string,
    perPage: perPage as string,
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
