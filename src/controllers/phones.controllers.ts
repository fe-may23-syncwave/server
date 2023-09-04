'use strict';

import { Request, Response } from 'express';
import { getAll, getById } from '../services/phones.services';

export const getAllPhones = async (req: Request, res: Response) => {
  const phones = await getAll();

  res.send(phones);
};

export const getOnePhone = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundPhone = await getById(id);

  if (!foundPhone) {
    res.status(404).send('Phone not found');

    return;
  }

  res.status(200).send(foundPhone);
};
