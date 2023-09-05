'use strict';

import { Phone } from '../models/phones';

export async function getAll() {
  const result = await Phone.findAll();

  return result;
}
export const getById = async (id: string) => {
  const phone = await Phone.findByPk(id);

  if (!phone) {
    return null;
  }

  phone.capacityAvailable = JSON.parse(phone.capacityAvailable);
  phone.colorsAvailable = JSON.parse(phone.colorsAvailable);
  phone.images = JSON.parse(phone.images);

  return phone;
};
