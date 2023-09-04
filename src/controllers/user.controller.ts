import { Request, Response } from 'express';
import { userService } from '../services/user.service';

async function getAll(req: Request, res: Response) {
  const users = await userService.getAllActive();
  res.send(users.map(userService.normalize));
}

export const userController = { getAll };
