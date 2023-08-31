import dotenv from 'dotenv';
import { createServer } from './createServer';
import { connect } from './utils/db';

dotenv.config();

const PORT = process.env.PORT || 3000;

createServer().listen(PORT, () => {
  connect();

  // eslint-disable-next-line no-console
  console.log(`Server is running on localhost:${PORT}`);
});
