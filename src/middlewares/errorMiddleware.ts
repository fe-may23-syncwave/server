/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiError } from '../exceptions/ApiError';
import { Request, Response, NextFunction } from 'express';


export function errorMiddleware(
  err: Error, req: Request, res: Response, next: NextFunction
) {
  console.error(err);
  if (err instanceof ApiError) {
    const { status, message, errors } = err;

    res.status(status).send({ message, errors });
    return;
  }
  res.status(500).send({message: 'Something went wrong'});
}
