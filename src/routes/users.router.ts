import express from 'express';
import { userController } from '../controllers/user.controller';
import { catchError } from '../middlewares/catchError';
import { authMiddleware } from '../middlewares/authMiddleware';

export const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all active users.
 *     description: Retrieve a list of all active users.
 *     responses:
 *       200:
 *         description: Successful response. Returns a list of active users.
 *     tags: [Users]
 */
userRouter.get(
  '/',
  catchError(authMiddleware),
  catchError(userController.getAll),
);
