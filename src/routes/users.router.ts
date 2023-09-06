import express from 'express';
import { userController } from '../controllers/user.controller';
import { catchError } from '../middlewares/catchError';
// import { authMiddleware } from '../middlewares/authMiddleware';

export const userRouter = express.Router();

userRouter.get(
  '/',
  // catchError(authMiddleware),
  catchError(userController.getAll),
);
