'use strict';

import { Accessories } from '../models/accessories';

export async function getAll() {
  const result = await Accessories.findAll();

  return result;
}
export const getById = async (id: string) => {
  const accessory = await Accessories.findByPk(id);

  return accessory;
};
