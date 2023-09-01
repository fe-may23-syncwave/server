import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import * as models from '../models';


dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } =
  process.env;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sequelize = new Sequelize({
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  dialect: 'postgres',
  port: 5432,
});

sequelize.addModels(Object.values(models));

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
