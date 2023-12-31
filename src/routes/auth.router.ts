/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { catchError } from '../middlewares/catchError';
import { authController } from '../controllers/auth.controller';

export const authRouter = express.Router();

authRouter.post('/registration', catchError(authController.register));

authRouter.get(
  '/activation/:activationToken',
  catchError(authController.activate),
);

authRouter.post('/login', catchError(authController.login));

authRouter.post('/google', catchError(authController.googleLogin));

authRouter.post('/logout', catchError(authController.logout));

authRouter.get('/refresh', catchError(authController.refresh));
