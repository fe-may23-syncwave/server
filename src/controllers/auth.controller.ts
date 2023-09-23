/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../exceptions/ApiError';
import { userService } from '../services/user.service';
import { User } from '../models';
import { jwtService } from '../services/jwt.service';
import { tokenService } from '../services/token.service';
import { googleService } from '../services/google.service';

function validateEmail(value: string) {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }
}

function validatePassword(value: string) {
  if (!value) {
    return 'Password is required';
  }

  if (value.length < 6) {
    return 'At least 6 characters';
  }
}

async function register(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  console.log('registration user✅', email, password);

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
  };

  if (errors.email || errors.password) {
    console.log('registration user❌', errors);

    throw ApiError.BadRequest('Validation error', errors);
  }

  await userService.register({ email, password });

  console.log('registration user✅', 'OK');

  res.send({ message: 'OK' });
}

async function activate(req: Request, res: Response, next: NextFunction) {
  const { activationToken } = req.params;

  console.log('activation user✅', activationToken);

  const user = await User.findOne({
    where: { activationToken },
  });

  if (!user) {
    res.sendStatus(404);
    return;
  }

  user.isActivated = true;
  // user.activationToken = null;
  await user.save();

  console.log('activation sendAuthentication✅', user);

  await sendAuthentication(res, user);

  console.log('activation finished✅');
}

async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  const user = await userService.getByEmail(email);

  if (!user) {
    throw ApiError.BadRequest('User with this email does not exist', {});
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw ApiError.BadRequest('Password is wrong', {});
  }

  await sendAuthentication(res, user);
}

async function refresh(req: Request, res: Response, next: NextFunction) {
  const { refreshToken } = req.cookies;
  const userData = jwtService.validateRefreshToken(refreshToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  const token = await tokenService.getByToken(refreshToken);

  if (!token) {
    throw ApiError.Unauthorized();
  }

  const user = await userService.getByEmail(userData.email);

  await sendAuthentication(res, user as User);
}

async function logout(req: Request, res: Response, next: NextFunction) {
  const { refreshToken } = req.cookies;
  const userData = jwtService.validateRefreshToken(refreshToken);

  res.clearCookie('refreshToken');

  if (userData) {
    await tokenService.remove(userData.id);
  }

  res.sendStatus(204);
}

async function sendAuthentication(res: Response, user: User) {
  const userData = userService.normalize(user);
  const accessToken = jwtService.generateAccessToken(userData);
  const refreshToken = jwtService.generateRefreshToken(userData);

  await tokenService.save(user.id, refreshToken);

  res.cookie('refreshToken', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.send({
    user: userData,
    accessToken,
  });
}

async function googleLogin(req: Request, res: Response) {
  const { token } = req.body;
  const googleData = await googleService.verifyGoogleToken(token);

  if (!googleData.payload?.email) {
    throw ApiError.BadRequest('Invalid user detected. Please try again', {});
  }
  console.log('googleLogin user✅', googleData);

  const { email } = googleData.payload;

  const user = await userService.getByEmail(email);

  if (!user) {
    await userService.register({
      email,
      password: '',
    });

    const newUser = await userService.getByEmail(email);
    console.log('googleLogin newUser✅', newUser);

    await sendAuthentication(res, newUser as User);
  }

  console.log('googleLogin sendAuthentication✅', user);

  await sendAuthentication(res, user as User);
}

export const authController = {
  register,
  activate,
  login,
  logout,
  refresh,
  googleLogin,
};
