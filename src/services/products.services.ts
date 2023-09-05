import { Order, Sequelize } from 'sequelize';
import { Product } from '../models/products';

type Queries = {
  sortBy: string;
  search: string;
  page: string;
  perPage: string;
};

export async function getAll({ sortBy, search, page, perPage }: Queries) {
  const order: Order = [];

  let products;

  switch (sortBy) {
  case 'age':
    order.push([
      Sequelize.literal('CASE WHEN "year" IS NULL THEN 1 ELSE 0 END'),
      'ASC',
    ]);
    order.push(['year', 'DESC']);
    break;

  case 'title':
    order.push(['name', 'ASC']);
    break;

  case 'cheapest':
    order.push(['fullPrice', 'ASC']);
    break;

  default:
    break;
  }

  if (page === '1' && perPage === 'all') {
    products = await Product.findAll({
      order,
    });
  } else {
    const limit = +perPage;
    const offset = (+page - 1) * limit || 0;

    products = await Product.findAll({
      offset,
      limit,
      order,
    });
  }

  if (search) {
    const normalizedSearch = search.toLowerCase().trim();

    products = products.filter((product) =>
      product.name.toLowerCase().includes(normalizedSearch),
    );
  }

  return products;
}

export async function getProductById(id: number) {
  const product = await Product.findByPk(id);

  return product;
}
