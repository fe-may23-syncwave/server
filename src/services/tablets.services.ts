'use strict';

import { Tablet } from '../models/tablets';

export async function getAll() {
  const result = await Tablet.findAll();

  return result;
}
export const getById = async (id: string) => {
  const tablet = await Tablet.findByPk(id);

  return tablet;
};
