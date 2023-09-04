import { Token } from '../models';

async function save(userId: number, refreshToken: string) {
  const token = await Token.findOne({
    where: { userId },
  });

  if (token) {
    token.refreshToken = refreshToken;

    await token.save();

    return;
  }

  await Token.create({ userId, refreshToken });
}

function getByToken(refreshToken: string) {
  return Token.findOne({
    where: { refreshToken },
  });
}

function remove(userId: number) {
  return Token.destroy({
    where: { userId },
  });
}

export const tokenService = {
  getByToken,
  save,
  remove,
};
