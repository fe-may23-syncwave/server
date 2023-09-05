import { Order, Sequelize } from 'sequelize';
import { Product } from '../models/products';
import { Category } from '../models';

export async function getNewest12Products() {
  const order: Order = [];

  order.push([
    Sequelize.literal('CASE WHEN "year" IS NULL THEN 1 ELSE 0 END'),
    'ASC',
  ]);
  order.push(['year', 'DESC']);

  const products = await Product.findAll({
    limit: 12,
    order,
  });

  return products;
}

export async function getBestDiscount12Products() {
  const order: Order = [];

  order.push([
    Sequelize.literal('CASE WHEN "discountPrice" IS NULL THEN 1 ELSE 0 END'),
    'DESC',
  ]);
  order.push(['discountPrice', 'DESC']);

  const products = await Product.findAll({
    limit: 12,
    order,
  });

  return products;
}

export async function getHightPrice12Products() {
  const order: Order = [];

  order.push(['fullPrice', 'DESC']);

  const products = await Product.findAll({
    limit: 12,
    order,
  });

  return products;
}

interface CategoryCounts {
  [key: string]: number;
}

export async function getCategoryProductCounts() {
  const products = await Product.findAll();
  const categories = await Category.findAll();
  const counts: CategoryCounts = {};

  for (const category of categories) {
    const categoryId = category.id;
    const categoryName = category.name;

    const productsInCategory = products.filter(
      product => product.category_id === categoryId,
    );

    const productCount = productsInCategory.length;

    counts[categoryName] = productCount;
  }

  return counts;
}
