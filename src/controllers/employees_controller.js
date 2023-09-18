import { connection } from '../db.js';

//READ FROM DATABASE

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM employees');
    res.send(rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const getEmployeeById = async (req, res) => {
  const id = req.params.id;

  try {
    const [rows] = await connection.query(
      `SELECT * FROM employees WHERE id = ${id}`
    );

    if (rows[0]) {
      res.send(rows[0]);
    } else {
      res.status(404).json({
        message: 'Employee not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

//CREATE EMPLOYEES

export const createEmployee = async (req, res) => {
  // req.body will receive the object passed on the post request.
  const { name, salary } = req.body;

  try {
    // Array destructuring. Rows will be the assigned name for the first element in the array.
    const [rows] = await connection.query(
      'INSERT INTO employees (name, salary) VALUES(?, ?)',
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

//UPDATE EMPLOYEES

export const updateEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const updateId = req.params.id;

  try {
    const [result] = await connection.query(
      `UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?`,
      [name, salary, updateId]
    );

    const [employee] = await connection.query(
      `SELECT * FROM employees WHERE id = ${updateId}`
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: 'Employee not found',
      });

    res.send(employee);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

//DELETE EMPLOYEES

export const deleteEmployees = async (req, res) => {
  const deleteId = req.params.id;

  try {
    const [employee] = await connection.query(
      `SELECT * FROM employees WHERE id = ${deleteId}`
    );

    const [result] = await connection.query(
      'DELETE FROM employees WHERE id = ?',
      [deleteId]
    );

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: 'Employee not found',
      });

    res.send(employee);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};
