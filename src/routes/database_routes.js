import { Router } from 'express';
import { databaseQuery } from '../controllers/database_controller.js';

const router = Router();

router.get('/database', databaseQuery);

export default router;
