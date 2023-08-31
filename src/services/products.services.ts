import { Product } from '../models/products';

const perPageItems = 4;
// added for testing

export interface Props {
  page?: string;
  perPage?: string;
}

async function getAll(queries: Props) {
  try {
    const products = await Product.findAll();
    console.log(products);

    let toPage = 0;
    let fromPage = 0;

    if (queries.page) {
      toPage = perPageItems * +queries.page;
      fromPage = toPage - perPageItems;
    }

    return products.slice(fromPage, toPage);
  } catch (error) {
    console.log(error);
  }
}

function getProductById(id: number) {
  return Product.findByPk(id);
}

export { getAll, getProductById };
