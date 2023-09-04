import { ApiError } from '../exceptions/ApiError';
import { jwtService } from '../services/jwt.service';
import { NextFunction, Request, Response } from 'express';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    throw ApiError.Unauthorized();
  }

  const [, accessToken] = authorizationHeader.split(' ');

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtService.validateAccessToken(accessToken);
  if (!userData) {
    throw ApiError.Unauthorized();
  }

  next();
}
