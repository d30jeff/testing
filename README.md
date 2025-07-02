# Testing

Modular Express TypeScript application with decorator-based routing and reusable core functionality.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js
- **TypeScript**: Typed superset of JavaScript for better development experience
- **Decorator-based routing**: Clean and modern routing using `@decorators/express`
- **Modular architecture**: Reusable core application initialization
- **Common middleware**: Integrated helmet, CORS, cookie-parser, and morgan
- **Multi-module support**: Easy setup for Admin, Consumer, Rider, Partner APIs

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the application:
```bash
npm run build
```

## Development

Run the application in development mode with hot reloading:
```bash
npm run dev
```

## Production

Build and run the application:
```bash
npm run build
npm start
```

## Core Architecture

The application uses a modular core system that allows easy initialization of different application modules.

### Quick Start

Initialize any application with a simple configuration:

```typescript
import { initializeApplication, startApplication } from './core';
import { YourController } from './controllers/YourController';

// Initialize application
const app = initializeApplication({
  name: 'Admin API',
  port: 5000,
  controllers: [YourController],
  enableHelmet: true,
  enableCors: true,
  enableMorganLogging: true
});

// Start the application
startApplication(app, { name: 'Admin API', port: 5000 });
```

### Configuration Options

The `initializeApplication` function accepts a configuration object with the following options:

- `name` (string): Application name for logging
- `port` (number, optional): Port number (defaults to 3000 or PORT env var)
- `controllers` (array, optional): Array of controller classes to attach
- `enableHelmet` (boolean, optional): Enable security headers (default: true)
- `enableCors` (boolean, optional): Enable CORS (default: true)
- `enableCookieParser` (boolean, optional): Enable cookie parsing (default: true)
- `enableMorganLogging` (boolean, optional): Enable HTTP request logging (default: true)

### Multiple Module Examples

```typescript
// Admin API
const adminApp = initializeApplication({
  name: 'Admin API',
  port: 5000,
  controllers: [AdminController]
});

// Consumer API  
const consumerApp = initializeApplication({
  name: 'Consumer API',
  port: 5001,
  controllers: [ConsumerController]
});

// Rider API
const riderApp = initializeApplication({
  name: 'Rider API',
  port: 5002,
  controllers: [RiderController],
  enableMorganLogging: false // Less verbose logging
});

// Partner API
const partnerApp = initializeApplication({
  name: 'Partner API',
  port: 5003,
  controllers: [PartnerController]
});
```

The application provides the following endpoints:

### GET /hello
Returns a simple greeting message.

**Response:**
```json
{
  "message": "Hello, World!",
  "timestamp": "2025-07-02T00:36:31.471Z",
  "method": "GET"
}
```

### GET /hello/:name
Returns a personalized greeting message.

**Example:** `GET /hello/TypeScript`

**Response:**
```json
{
  "message": "Hello, TypeScript!",
  "timestamp": "2025-07-02T00:36:36.134Z",
  "method": "GET"
}
```

### POST /hello
Accepts JSON data and returns it along with a greeting.

**Request body:**
```json
{
  "name": "Express",
  "framework": "TypeScript"
}
```

**Response:**
```json
{
  "message": "Hello from POST!",
  "receivedData": {
    "name": "Express",
    "framework": "TypeScript"
  },
  "timestamp": "2025-07-02T00:36:41.006Z",
  "method": "POST"
}
```

## Project Structure

```
src/
├── core/
│   ├── application.ts         # Core application initialization logic
│   ├── types.ts              # TypeScript interfaces and types
│   └── index.ts              # Core module exports
├── controllers/
│   └── HelloController.ts    # Sample controller with decorator routing
├── examples/
│   └── module-examples.ts    # Examples of different module configurations
└── index.ts                  # Main application entry point
```

## Technology Stack

- Node.js
- Express.js v4.21.2
- TypeScript v5.8.3
- @decorators/express v3.0.0
- helmet (Security headers)
- cors (Cross-origin resource sharing)
- cookie-parser (Cookie parsing)
- morgan (HTTP request logging)
- reflect-metadata (Decorator metadata support)