// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { DB_DRIVER, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } =
  process.env;

// const URI = `${DB_DRIVER}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`;

const settings = {
  dialect: DB_DRIVER,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  dialectOptions: {
    ssl: false,
  },
};

module.exports = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};
