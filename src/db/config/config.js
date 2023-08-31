import dotenv from 'dotenv';

dotenv.config();

const { DB_DRIVER, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } =
  process.env;

const URI = `${DB_DRIVER}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`;

const settings = {
  url: URI,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};
