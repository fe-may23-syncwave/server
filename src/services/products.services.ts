import { Op, Order, OrderItem, Sequelize } from 'sequelize';
import { Product } from '../models/products';
import { getCategoryIdByName } from './categories.service';

type Queries = {
  sortBy?: string;
  search?: string;
  page: string;
  perPage: string;
  category?: string;
};

export type QueryParameters = {
  order?: OrderItem[];
  offset?: number;
  limit?: number;
  where: {
    name?: {
      [Op.iLike]: string;
    };
    category_id?: number;
  };
};

export async function getAll({
  sortBy,
  search,
  page,
  perPage,
  category,
}: Queries) {
  const queryParameters: QueryParameters = {
    where: {},
  };
  const order: Order = [];

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

  case 'expensive':
    order.push(['fullPrice', 'DESC']);
    break;

  case 'bestDiscount':
    order.push([
      Sequelize.literal(
        'CASE WHEN "discountPrice" IS NULL THEN 1 ELSE 0 END',
      ),
      'ASC',
    ]);
    order.push([
      Sequelize.literal('"fullPrice" - "discountPrice"'),
      'DESC',
    ]);
    break;

  default:
    break;
  }

  queryParameters.order = order;

  if (perPage !== 'all') {
    const limit = +perPage;
    const offset = (+page - 1) * limit || 0;

    queryParameters.limit = limit;
    queryParameters.offset = offset;
  }

  if (search) {
    const normalizedSearch = search.toLowerCase().trim();

    queryParameters.where.name = {
      [Op.iLike]: normalizedSearch ? `%${normalizedSearch}%` : '',
    };
  }

  if (category) {
    const category_id = await getCategoryIdByName(category);

    if (category_id) {
      queryParameters.where.category_id = category_id;
    }
  }

  return Product.findAll(queryParameters);
}

export async function getProductById(id: number) {
  const product = await Product.findByPk(id);

  return product;
}
