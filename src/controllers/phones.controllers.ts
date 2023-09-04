'use strict';

import { Request, Response } from 'express';
import { getAll } from '../services/phones.services';

export const getAllPhones = async (req: Request, res: Response) => {
  const phones = await getAll();

  res.send(phones);
};
