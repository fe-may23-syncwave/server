'use strict';

import { Request, Response } from 'express';
import { getAll, getById } from '../services/phones.services';

export const getAllAccessories = async (req: Request, res: Response) => {
  const accessory = await getAll();

  res.send(accessory);
};

export const getOneAccessory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundAccessory = await getById(id);

  if (!foundAccessory) {
    res.status(404).send('Phone not found');

    return;
  }

  res.status(200).send(foundAccessory);
};
