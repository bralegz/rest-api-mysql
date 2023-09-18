import { Router } from 'express';
import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployees,
  deleteEmployees,
} from '../controllers/employees_controller.js';

const router = Router();
// CRUD operations: Create, Read, Update Delete

//Read
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById);
//Create
router.post('/employees', createEmployee);
//Update
router.patch('/employees/:id', updateEmployees);
//Delete
router.delete('/employees/:id', deleteEmployees);

export default router;
