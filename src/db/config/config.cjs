// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } =
  process.env;

const settings = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
};

module.exports = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};
