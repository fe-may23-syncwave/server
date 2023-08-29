import dotenv from 'dotenv';
import {createServer} from './createServer';


dotenv.config();

const PORT = process.env.PORT;

createServer()
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on localhost:${PORT}`);
  });
