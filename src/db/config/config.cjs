// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

const URI = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`;

const settings = {
  url: URI,
  dialect: 'postgres',
};

module.exports = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};
