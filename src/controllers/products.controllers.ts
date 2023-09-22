import { Request, Response } from 'express';
import { getAll, getOne } from '../services/products.services';

interface MyQuery {
  sortBy?: string;
  search?: string;
  page?: string;
  perPage?: string;
  category?: string;
}

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get a list of products.
 *     description: Retrieves a list of products based on query parameters.
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         description: Sort products by a specific criteria.
 *         schema:
 *           type: string
 *       - in: query
 *         name: search
 *         description: Search products by a keyword.
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         description: Page number for pagination.
 *         schema:
 *           type: string
 *       - in: query
 *         name: perPage
 *         description: Number of products per page.
 *         schema:
 *           type: string
 *       - in: query
 *         name: category
 *         description: Filter products by category.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request. Returns a list of products.
 *     tags: [Products]
 */

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

/**
 * @swagger
 * /products/{itemId}:
 *   get:
 *     summary: Get a product by ID.
 *     description: Retrieves a product by its unique ID.
 *     parameters:
 *       - in: path
 *         name: itemId
 *         description: ID of the product to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request. Returns the product with the specified ID.
 *       404:
 *         description: Product not found.
 *     tags: [Products]
 */

export const getOneProduct = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundProduct = await getOne(itemId);

  if (!foundProduct) {
    res.status(404).send('Product not found');

    return;
  }

  res.status(200).send(foundProduct);
};
