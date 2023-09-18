import express from 'express';
import employeesRoutes from './routes/employees_routes.js';
import databaseRoutes from './routes/database_routes.js';
import { port } from './config.js';

const app = express();
app.use(express.json()); // Convert body json data into a javascript object

//USE ROUTES
app.use(databaseRoutes);
app.use('/api', employeesRoutes); //will add /api before the designed route

//Response in case the url doesn't match with any of the routes defined
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found',
  });
});

app.listen(port, () => {
  console.log(`Server running un port ${port}`);
});
