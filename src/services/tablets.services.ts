'use strict';

import { Tablet } from '../models/tablets';

export async function getAll() {
  const result = await Tablet.findAll();

  return result;
}
export const getById = async (id: string) => {
  const tablet = await Tablet.findByPk(id);

  if (!tablet) {
    return null;
  }

  tablet.capacityAvailable = JSON.parse(tablet.capacityAvailable);
  tablet.colorsAvailable = JSON.parse(tablet.colorsAvailable);
  tablet.images = JSON.parse(tablet.images);

  return tablet;
};
