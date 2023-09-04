'use strict';

import { Phone } from '../models/phones';

export async function getAll() {
  const result = await Phone.findAll();

  return result;
}
