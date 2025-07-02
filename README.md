# Testing

Express TypeScript application with decorator-based routing using `@decorators/express`.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js
- **TypeScript**: Typed superset of JavaScript for better development experience
- **Decorator-based routing**: Clean and modern routing using `@decorators/express`
- **Reflection metadata**: Support for runtime type information

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

## API Endpoints

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
├── controllers/
│   └── HelloController.ts    # Sample controller with decorator routing
└── index.ts                  # Main application entry point
```

## Technology Stack

- Node.js
- Express.js v4.21.2
- TypeScript v5.8.3
- @decorators/express v3.0.0
- reflect-metadata for decorator metadata