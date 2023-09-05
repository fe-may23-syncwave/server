import { Order } from '../models';

function getAll() {
  return Order.findAll({
    include: [
      {
        association: 'user',
        attributes: ['id', 'email'],
      },
    ],
  });
}

function getById(id: number) {
  return Order.findOne({
    where: { id },
  });
}

async function create({
  userId,
  totalPrice,
  quantity,
}: {
  userId: number;
  totalPrice: number;
  quantity: number;
}) {
  const order = await Order.create({
    userId,
    totalPrice,
    quantity,
  });

  return order;
}

function removeById(id: number) {
  return Order.destroy({
    where: { id },
  });
}

export const orderService = {
  getAll,
  getById,
  create,
  removeById,
};
