'use strict';

import { Phone } from '../models/phones';

export async function getAll() {
  const result = await Phone.findAll();

  return result;
}
export const getById = async (id: string) => {
  const phone = await Phone.findByPk(id);

  return phone;
};
