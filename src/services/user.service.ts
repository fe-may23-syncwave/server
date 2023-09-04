import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models';
import { ApiError } from '../exceptions/ApiError';
import { emailService } from './email.service';

function getAllActive() {
  return User.findAll({
    where: {
      isActivated: true,
    },
  });
}

function getByEmail(email: string) {
  return User.findOne({
    where: { email },
  });
}

function normalize({ id, email }: { id: number; email: string }) {
  return { id, email };
}

async function register({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const existingUser = await getByEmail(email);

  if (existingUser) {
    throw ApiError.BadRequest('Validation error', {
      email: 'Email is already taken',
    });
  }

  const activationToken: string = uuidv4();
  const hash = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hash,
    activationToken,
  });

  await emailService.sendActivationLink(email, activationToken);
}

export const userService = {
  getAllActive,
  getByEmail,
  normalize,
  register,
};
