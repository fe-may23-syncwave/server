import { Sequelize } from 'sequelize-typescript';
import { development } from '../db/config/config.cjs';
import * as models from '../models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sequelize = new Sequelize({
  ...development,
  dialect: 'postgres',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);

sequelize.addModels(Object.values(models));

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
