import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import * as models from '../models';

dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

const URI = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`;

export const sequelize = new Sequelize(URI, {
  models: [
    models.Product,
    models.Category,
    models.Capacity,
    models.Colors,
    models.Phone,
    models.Tablet,
    models.Accessories,
    models.User,
    models.Token,
    models.Order,
  ],
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
