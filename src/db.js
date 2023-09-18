import { createPool } from 'mysql2/promise';
import { db_host, db_port, db_user, db_password, db_name } from './config.js';

//Enviroment variables. Install dotenv

export const connection = createPool({
  host: db_host,
  user: db_user,
  password: db_password,
  port: db_port,
  database: db_name,
});
