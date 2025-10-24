# Full Stack Application Boilerplate

This is a full-stack application boilerplate with a React frontend and Spring Boot backend, featuring user authentication and management.

## Author Information

- **Author**: Arpan Mukherjee
- **Email**: arpan.mukh@gmail.com
- **Company**: Rupantar
- **Website**: [https://rupantar.tech](https://rupantar.tech)

## Using This Boilerplate

To create a new project using this boilerplate:

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Run the create-project script:
   ```bash
   ./create-project.sh <your-project-name>
   ```

3. Navigate to your new project:
   ```bash
   cd <your-project-name>
   ```

4. Follow the instructions in the project's README.md to start development.

The script will:
- Create a new directory with your project name
- Set up the frontend and backend
- Configure Docker files
- Set up environment configurations
- Initialize a git repository
- Create a project-specific README.md

## Project Structure

```
.
├── frontend/          # React frontend application
└── backend/          # Spring Boot backend application
```

## Frontend (React)

The frontend is built with React and TypeScript, providing a modern and responsive user interface.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Getting Started

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Backend (Spring Boot)

The backend is built with Spring Boot, providing RESTful APIs and secure authentication.

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

### Getting Started

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the application:
   ```bash
   ./mvnw clean install
   ```

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

The application will be available at [http://localhost:9090](http://localhost:9090).

### Environment-Specific Build and Deployment

The application supports three environments: Development, QA, and Production. Here's how to build and deploy for each:

#### Development Environment
1. Build and run locally:
   ```bash
   # Backend
   cd backend
   ./mvnw clean install
   ./mvnw spring-boot:run -Dspring.profiles.active=dev

   # Frontend
   cd frontend
   npm install
   npm start
   ```

2. Using Docker:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

#### QA Environment
1. Build the application:
   ```bash
   # Backend
   cd backend
   ./mvnw clean package -DskipTests -Pqa
   
   # Frontend
   cd frontend
   npm install
   npm run build
   ```

2. Deploy using Docker:
   ```bash
   docker-compose -f docker-compose.qa.yml up --build
   ```

3. Environment-specific configurations:
   - Database: MySQL
   - Connection pool size: 10
   - SQL queries visible
   - Auto schema updates enabled

#### Production Environment
1. Build the application:
   ```bash
   # Backend
   cd backend
   ./mvnw clean package -DskipTests -Pprod
   
   # Frontend
   cd frontend
   npm install
   npm run build
   ```

2. Deploy using Docker:
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

3. Environment-specific configurations:
   - Database: PostgreSQL
   - Connection pool size: 20
   - SQL queries hidden
   - No auto schema updates
   - SSL/TLS enabled
   - Rate limiting enabled

#### Environment Variables

Create a `.env` file in the root directory for each environment:

```bash
# Development (.env.dev)
SPRING_PROFILES_ACTIVE=dev
DB_HOST=localhost
DB_PORT=5432
DB_NAME=appdb
DB_USER=appuser
DB_PASSWORD=apppass
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400000

# QA (.env.qa)
SPRING_PROFILES_ACTIVE=qa
DB_HOST=qa-db
DB_PORT=3306
DB_NAME=appdb
DB_USER=appuser
DB_PASSWORD=apppass
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400000

# Production (.env.prod)
SPRING_PROFILES_ACTIVE=prod
DB_HOST=prod-db
DB_PORT=5432
DB_NAME=appdb
DB_USER=appuser
DB_PASSWORD=apppass
JWT_SECRET=your-secure-secret-key
JWT_EXPIRATION=86400000
```

#### Docker Compose Files

1. Development (`docker-compose.dev.yml`):
   ```yaml
   version: '3.8'
   services:
     frontend:
       build:
         context: ./frontend
         dockerfile: Dockerfile.dev
       ports:
         - "3000:3000"
       volumes:
         - ./frontend:/app
         - /app/node_modules
       environment:
         - NODE_ENV=development
         - REACT_APP_API_URL=http://localhost:9090

     backend:
       build:
         context: ./backend
         dockerfile: Dockerfile.dev
       ports:
         - "9090:9090"
       volumes:
         - ./backend:/app
       environment:
         - SPRING_PROFILES_ACTIVE=dev
         - SPRING_DATASOURCE_URL=jdbc:h2:mem:testdb

     db:
       image: h2:latest
       ports:
         - "9092:9092"
   ```

2. QA (`docker-compose.qa.yml`):
   ```yaml
   version: '3.8'
   services:
     frontend:
       build:
         context: ./frontend
         dockerfile: Dockerfile.qa
       ports:
         - "80:80"
       environment:
         - NODE_ENV=qa
         - REACT_APP_API_URL=http://qa-api.example.com

     backend:
       build:
         context: ./backend
         dockerfile: Dockerfile.qa
       ports:
         - "9090:9090"
       environment:
         - SPRING_PROFILES_ACTIVE=qa
         - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/appdb

     db:
       image: mysql:8.0
       ports:
         - "3306:3306"
       environment:
         - MYSQL_DATABASE=appdb
         - MYSQL_USER=appuser
         - MYSQL_PASSWORD=apppass
   ```

3. Production (`docker-compose.prod.yml`):
   ```yaml
   version: '3.8'
   services:
     frontend:
       build:
         context: ./frontend
         dockerfile: Dockerfile.prod
       ports:
         - "80:80"
       environment:
         - NODE_ENV=production
         - REACT_APP_API_URL=https://api.example.com

     backend:
       build:
         context: ./backend
         dockerfile: Dockerfile.prod
       ports:
         - "9090:9090"
       environment:
         - SPRING_PROFILES_ACTIVE=prod
         - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/appdb

     db:
       image: postgres:13-alpine
       ports:
         - "5432:5432"
       environment:
         - POSTGRES_DB=appdb
         - POSTGRES_USER=appuser
         - POSTGRES_PASSWORD=apppass
       volumes:
         - postgres_data:/var/lib/postgresql/data
   ```

### Maven Commands and Goals

The project uses Maven Wrapper (`./mvnw`) for consistent builds across different environments. Here are the common Maven commands:

#### Default Goals
- `./mvnw`: Runs the default goal (clean install spring-boot:run)
- `./mvnw clean`: Cleans the project
- `./mvnw install`: Installs the package into the local repository
- `./mvnw package`: Packages the compiled code
- `./mvnw verify`: Runs integration tests

#### Spring Boot Specific Goals
- `./mvnw spring-boot:run`: Runs the application
- `./mvnw spring-boot:test-run`: Runs the application with test configuration
- `./mvnw spring-boot:build-info`: Generates build information
- `./mvnw spring-boot:repackage`: Repackages the application

#### Testing Goals
- `./mvnw test`: Runs unit tests
- `./mvnw verify`: Runs integration tests
- `./mvnw test-compile`: Compiles the test classes
- `./mvnw surefire:test`: Runs tests with Surefire plugin

#### Common Command Combinations
- `./mvnw clean install`: Cleans and creates a fresh build
- `./mvnw clean package`: Cleans and packages the application
- `./mvnw clean verify`: Cleans and runs all tests
- `./mvnw spring-boot:run -Dspring.profiles.active=dev`: Runs with dev profile
- `./mvnw spring-boot:run -Dspring.profiles.active=prod`: Runs with prod profile

#### Docker Commands
- `./mvnw clean package docker:build`: Builds the Docker image for the backend
- `./mvnw docker:push`: Pushes the Docker image to a registry
- `docker-compose up`: Builds and starts all services
- `docker-compose up -d`: Builds and starts all services in detached mode
- `docker-compose down`: Stops and removes all containers
- `docker-compose logs -f`: Follows the logs of all services
- `docker-compose ps`: Lists all running containers

### Database Configuration

The application supports multiple database configurations:

#### Development (H2)
- In-memory database
- H2 Console available at [http://localhost:9090/h2-console](http://localhost:9090/h2-console)
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: `password`

##### H2 Database Access Details
1. Open your browser and navigate to [http://localhost:9090/h2-console](http://localhost:9090/h2-console)
2. Use the following connection details:
   - JDBC URL: `jdbc:h2:mem:testdb;DB_CLOSE_ON_EXIT=FALSE`
   - Username: `sa`
   - Password: `password`
3. Click "Connect" to access the H2 Console
4. Available tables:
   - `users`: Contains user information
   - `schema_version`: Contains database version information

##### Common H2 Queries
```sql
-- View all users
SELECT * FROM users;

-- View user by username
SELECT * FROM users WHERE username = 'admin';

-- View user by email
SELECT * FROM users WHERE email = 'admin@mail.com';

-- Count total users
SELECT COUNT(*) FROM users;
```

#### QA (MySQL)
- MySQL database
- Connection pool size: 10
- SQL queries visible

#### Production (PostgreSQL)
- PostgreSQL database
- Connection pool size: 20
- SQL queries hidden
- No auto schema updates

### Default Admin User

The application comes with a default admin user:

- Username: `admin`
- Email: `admin@mail.com`
- Password: (hashed password provided in data.sql)

### API Endpoints

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login user
- `GET /api/users/me`: Get current user profile
- `PUT /api/users/me`: Update current user profile

### Security Features

- JWT-based authentication
- Password encryption using BCrypt
- CORS configuration
- Role-based access control

## Development Tools

### Hot Reload

The application supports hot reloading for both frontend and backend:

- Frontend: React's built-in hot reload
- Backend: Spring Boot DevTools with 1s quiet period

### Database Initialization

The application automatically initializes the database with:
- Schema creation (schema.sql)
- Default data insertion (data.sql)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 