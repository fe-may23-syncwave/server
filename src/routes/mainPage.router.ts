import express from 'express';
export const mainPageRouter = express.Router();
import { getMainInfo } from '../controllers/mainPage.controller';

mainPageRouter.get('/', getMainInfo);
