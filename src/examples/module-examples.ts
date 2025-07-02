import { initializeApplication, startApplication } from '../core';
import { HelloController } from '../controllers/HelloController';

// Example: Admin API
const adminApp = initializeApplication({
  name: 'Admin API',
  port: 5000,
  controllers: [HelloController], // In practice, this would be AdminController
  enableHelmet: true,
  enableCors: true,
  enableMorganLogging: true
});

// Example: Consumer API
const consumerApp = initializeApplication({
  name: 'Consumer API',
  port: 5001,
  controllers: [HelloController], // In practice, this would be ConsumerController
  enableHelmet: true,
  enableCors: true
});

// Example: Rider API
const riderApp = initializeApplication({
  name: 'Rider API',
  port: 5002,
  controllers: [HelloController], // In practice, this would be RiderController
  enableHelmet: true,
  enableCors: false, // Maybe different CORS policy
  enableMorganLogging: false // Maybe less logging
});

// Example: Partner API
const partnerApp = initializeApplication({
  name: 'Partner API',
  port: 5003,
  controllers: [HelloController], // In practice, this would be PartnerController
  enableHelmet: true,
  enableCors: true,
  enableCookieParser: true
});

// Start applications (commented out to avoid conflicts)
// startApplication(adminApp, { name: 'Admin API', port: 5000 });
// startApplication(consumerApp, { name: 'Consumer API', port: 5001 });
// startApplication(riderApp, { name: 'Rider API', port: 5002 });
// startApplication(partnerApp, { name: 'Partner API', port: 5003 });

export { adminApp, consumerApp, riderApp, partnerApp };