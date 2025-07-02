import 'reflect-metadata';
import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { attachControllers } from '@decorators/express';
import { ApplicationConfig } from './types';

export function initializeApplication(config: ApplicationConfig): Application {
  const app = express();

  // Apply security middleware (helmet) if enabled
  if (config.enableHelmet !== false) {
    app.use(helmet());
  }

  // Apply CORS middleware if enabled
  if (config.enableCors !== false) {
    app.use(cors());
  }

  // Apply cookie parser if enabled
  if (config.enableCookieParser !== false) {
    app.use(cookieParser());
  }

  // Apply morgan logging if enabled
  if (config.enableMorganLogging !== false) {
    app.use(morgan('combined'));
  }

  // Middleware for parsing JSON bodies
  app.use(express.json());
  
  // Middleware for parsing URL-encoded bodies
  app.use(express.urlencoded({ extended: true }));

  // Attach controllers if provided
  if (config.controllers && config.controllers.length > 0) {
    attachControllers(app, config.controllers);
  }

  return app;
}

export function startApplication(app: Application, config: ApplicationConfig): void {
  const PORT = config.port || process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`${config.name} is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to test the application`);
  });
}