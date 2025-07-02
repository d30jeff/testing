import 'reflect-metadata';
import express from 'express';
import { attachControllers } from '@decorators/express';
import { HelloController } from './controllers/HelloController';

// Create Express application
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Attach controllers
attachControllers(app, [HelloController]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/hello to test the application`);
});