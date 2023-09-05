import { Request, Response } from 'express';
import { orderService } from '../services/order.service';
import { ApiError } from '../exceptions/ApiError';

async function getAll(req: Request, res: Response) {
  const orders = await orderService.getAll();
  res.send(orders);
}

async function getById(req: Request, res: Response) {
  const order = await orderService.getById(Number(req.params.id));
  res.send(order);
}

async function create(req: Request, res: Response) {
  const order = await orderService.create(req.body);
  res.send(order);
}

async function removeById(req: Request, res: Response) {
  const order = await orderService.getById(Number(req.params.id));

  if (!order) {
    throw ApiError.NotFound();
  }

  await orderService.removeById(Number(req.params.id));

  res.sendStatus(204);
}

export const orderController = {
  getAll,
  getById,
  create,
  removeById,
};
