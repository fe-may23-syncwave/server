import { Sequelize } from 'sequelize/types';
import { development } from '../db/config/config.cjs';

export const sequelize = new Sequelize(development);

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
