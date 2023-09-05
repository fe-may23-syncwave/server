'use strict';

import { Request, Response } from 'express';
import {
  getBestDiscount12Products,
  getCategoryProductCounts,
  getHightPrice12Products,
  getNewest12Products,
} from '../services/mainPage.services';

export const getMainInfo = async (req: Request, res: Response) => {
  const newest = await getNewest12Products();
  const bestDiscount = await getBestDiscount12Products();
  const hightPrice = await getHightPrice12Products();
  const counts = await getCategoryProductCounts();

  res.send({ newest, bestDiscount, hightPrice, counts });
};
