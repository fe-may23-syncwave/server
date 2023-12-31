import jwt from 'jsonwebtoken';

interface User {
  id: number;
  email: string;
}

function generateAccessToken(user: User) {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET as string, {
    expiresIn: '10m',
  });
}

function generateRefreshToken(user: User) {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: '10d',
  });
}

function validateAccessToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET as string) as User;
  } catch (err) {
    return null;
  }
}

function validateRefreshToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET as string) as User;
  } catch (err) {
    return null;
  }
}

export const jwtService = {
  generateAccessToken,
  generateRefreshToken,
  validateAccessToken,
  validateRefreshToken,
};
