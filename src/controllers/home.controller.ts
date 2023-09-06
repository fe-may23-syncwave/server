'use strict';

import { Request, Response } from 'express';
import {
  getBestDiscount12Products,
  getCategoryProductCounts,
  getHightPrice12Products,
  getNewest12Products,
} from '../services/home.services';

export const getNewest = async (req: Request, res: Response) => {
  const newest = await getNewest12Products();

  res.send({ newest });
};
export const getBestDiscount = async (req: Request, res: Response) => {
  const bestDiscount = await getBestDiscount12Products();


  res.send({ bestDiscount });
};
export const getHightPrice = async (req: Request, res: Response) => {
  const hightPrice = await getHightPrice12Products();

  res.send({ hightPrice });
};
export const getProductCounts = async (req: Request, res: Response) => {
  const counts = await getCategoryProductCounts();

  res.send({ counts });
};
