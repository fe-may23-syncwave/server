'use strict';

import express from 'express';
export const phonesRouter = express.Router();
import { getAllPhones } from '../controllers/phones.controllers';

phonesRouter.get('/', getAllPhones);
