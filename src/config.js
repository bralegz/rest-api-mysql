import { config } from 'dotenv';

/* 
We export config and initialize it to have access to the environment variables from process.env.
*/

config();

export const port = process.env.PORT || 3000;
export const db_host = process.env.DB_HOST || 'localhost';
export const db_port = process.env.DB_PORT || 3306;
export const db_user = process.env.DB_USER || 'root';
export const db_password = process.env.DB_PASSWORD || 'root';
export const db_name = process.env.DB_NAME || 'db_node';
