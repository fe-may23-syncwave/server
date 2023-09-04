'use strict';

import { Request, Response } from 'express';
import { getAll, getById } from '../services/phones.services';

export const getAllTablets = async (req: Request, res: Response) => {
  const tablets = await getAll();

  res.send(tablets);
};

export const getOneTablet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundTablet = await getById(id);

  if (!foundTablet) {
    res.status(404).send('Tablet not found');

    return;
  }

  res.status(200).send(foundTablet);
};
