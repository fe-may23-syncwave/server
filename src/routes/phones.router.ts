'use strict';

import express from 'express';
export const phonesRouter = express.Router();
import { getAllPhones, getOnePhone } from '../controllers/phones.controllers';

phonesRouter.get('/', getAllPhones);
phonesRouter.get('/:id', getOnePhone);
