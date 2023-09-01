// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { DB_DRIVER, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } =
  process.env;

// const URI = `${DB_DRIVER}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`;

const settings = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  dialect: DB_DRIVER,
  dialectOptions: {
    ssl: false,
  },
};

module.exports = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};
