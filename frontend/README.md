# Rupantar Frontend

A modern React application for digital transformation solutions.

## Features

- TypeScript for type safety
- React Router for navigation
- Context API for state management
- CSS Variables for consistent styling
- Error boundaries for graceful error handling
- Lazy loading for better performance
- Responsive design
- Unit and integration tests

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── auth/         # Authentication components
│   │   ├── common/       # Shared components
│   │   ├── home/         # Home page components
│   │   └── layout/       # Layout components
│   ├── contexts/         # React contexts
│   ├── hooks/           # Custom hooks
│   ├── services/        # API services
│   ├── styles/          # Global styles and variables
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── public/              # Static assets
└── tests/              # Test files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENV=development
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

### Test Structure

- `__tests__/` - Test files
  - `components/` - Component tests
  - `integration/` - Integration tests
  - `utils/` - Utility function tests

## Component Documentation

### Common Components

- `ErrorBoundary`: Catches JavaScript errors and displays a fallback UI
- `Loading`: Displays a loading spinner with customizable size and full-screen option
- `SeoMeta`: Handles SEO meta tags
- `SeoImage`: Optimized image component with lazy loading

### Layout Components

- `Header`: Main navigation header with responsive design
- `Footer`: Site footer with links and information

### Authentication Components

- `Login`: Login form with validation
- `Register`: Registration form with validation

## Performance Optimization

- Lazy loading for routes
- Image optimization with blur placeholder
- Code splitting
- Memoization for expensive computations

## State Management

The application uses React Context API for state management. Key contexts include:

- `AuthContext`: Manages authentication state
- `ThemeContext`: Handles theme preferences
- `ErrorContext`: Manages global error state

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 