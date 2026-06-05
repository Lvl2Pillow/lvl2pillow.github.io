# lvl2pillow.github.io

Personal website for lvl2pillow.

## Architecture & Stack

This project is a React-based Single Page Application (SPA), built using:

- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [React](https://react.dev/) 19
- **Routing**: [React Router](https://reactrouter.com/) 7
- **Linting**: [ESLint](https://eslint.org/)

## Development

To get started with local development:

1. **Prerequisites**: Ensure [Node.js](https://nodejs.org/) is installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```

## Testing

This project uses [Vitest](https://vitest.dev/) for fast unit testing, with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component testing.

To run tests:
```bash
npm run test
```

## Available Commands

The following commands are available in the project:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles and builds the application for production.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run preview`: Previews the production build locally.
- `npm run test`: Runs the test suite using Vitest.
- `npm run coverage`: Runs tests with coverage report.
- `npm run check`: Runs type checking, linting, and tests to verify project health.
