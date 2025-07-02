import { initializeApplication, startApplication } from './core';
import { HelloController } from './controllers/HelloController';

// Initialize the application with configuration
const app = initializeApplication({
  name: 'Testing API',
  port: 3000,
  controllers: [HelloController]
});

// Start the application
startApplication(app, {
  name: 'Testing API',
  port: 3000
});