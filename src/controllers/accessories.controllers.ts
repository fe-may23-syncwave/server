'use strict';

import { Request, Response } from 'express';
import { getAll, getById } from '../services/accessories.service';

export const getAllAccessories = async (req: Request, res: Response) => {
  const accessories = await getAll();

  if (!accessories.length) {
    res.status(404).send('Accessories not found');

    return;
  }

  res.status(200).send(accessories);
};

export const getOneAccessory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundAccessory = await getById(id);

  if (!foundAccessory) {
    res.status(404).send('Accessory not found');

    return;
  }

  res.status(200).send(foundAccessory);
};
