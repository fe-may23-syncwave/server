import { Product } from '../models/products';

type Queries = {
  sortBy: string;
  search: string;
  page: string;
  perPage: string;
}

export async function getAll({
  sortBy,
  search,
  page,
  perPage,
}: Queries) {
  const order =  [];

  let products = await Product.findAll();
  console.log(products);

  if (page === '1' && perPage === 'all') {
    products = await Product.findAll();
  } else {
    const limit = +perPage;
    const offset = (+page - 1) * limit || 0;

    products = await Product.findAll({
      offset,
      limit
    });
  }

  if (search) {
    const normalizedSearch = search.toLowerCase().trim();

    products = products.filter(product => (
      product.name.toLowerCase().includes(normalizedSearch)));
  }

  switch (sortBy) {
  case 'age':
    order.push(['year', 'DESC']);
    break;

  case 'title':
    order.push(['name', 'ASC']);
    break;

  case 'cheapest':
    order.push(['price', 'ASC']);
    break;

  default:
    break;
  }

  return products;
}

export async function getProductById(id: number) {
  const product = await Product.findByPk(id);

  return product;
}
