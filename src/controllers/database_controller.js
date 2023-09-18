import { connection } from '../db.js';

export const databaseQuery = async (req, res) => {
  const [result] = await connection.query('SELECT * FROM employees');
  res.json(result);
};
