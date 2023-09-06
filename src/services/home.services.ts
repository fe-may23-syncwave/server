import { Category } from '../models';
import { getAll } from './products.services';

export async function getNewest12Products() {
  return getAll({
    sortBy: 'age',
    perPage: '12',
    page: '1',
  });
}

export async function getBestDiscount12Products() {
  return getAll({
    sortBy: 'bestDiscount',
    perPage: '12',
    page: '1',
  });
}

export async function getHightPrice12Products() {
  return getAll({
    sortBy: 'expensive',
    perPage: '12',
    page: '1',
  });
}

interface CategoryCounts {
  [key: string]: number;
}

export async function getCategoryProductCounts() {
  const categories = await Category.findAll();
  const counts: CategoryCounts = {};

  for (const category of categories) {
    const categoryName = category.name;

    const productsInCategory = await getAll({
      perPage: 'all',
      page: '1',
      category: categoryName,
    });

    const productCount = productsInCategory.length;

    counts[categoryName] = productCount;
  }

  return counts;
}
