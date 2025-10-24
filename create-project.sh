#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored messages
print_message() {
    echo -e "${2}${1}${NC}"
}

# Check if project name is provided
if [ -z "$1" ]; then
    print_message "Usage: ./create-project.sh <project-name>" "$RED"
    exit 1
fi

PROJECT_NAME=$1
CURRENT_DIR=$(pwd)

# Create project directory
print_message "Creating project directory: $PROJECT_NAME" "$YELLOW"
mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"

# Initialize git repository
print_message "Initializing git repository..." "$YELLOW"
git init

# Copy frontend template
print_message "Setting up frontend..." "$YELLOW"
cp -r "$CURRENT_DIR/frontend" .
cd frontend
rm -rf node_modules package-lock.json
npm install
cd ..

# Copy backend template
print_message "Setting up backend..." "$YELLOW"
cp -r "$CURRENT_DIR/backend" .
cd backend
rm -rf target .mvn mvnw mvnw.cmd
./mvnw clean install -DskipTests
cd ..

# Copy Docker files
print_message "Setting up Docker configuration..." "$YELLOW"
cp "$CURRENT_DIR/docker-compose.yml" .
cp "$CURRENT_DIR/docker-compose.dev.yml" .
cp "$CURRENT_DIR/docker-compose.qa.yml" .
cp "$CURRENT_DIR/docker-compose.prod.yml" .

# Copy environment files
print_message "Setting up environment files..." "$YELLOW"
cp "$CURRENT_DIR/.env.dev" .
cp "$CURRENT_DIR/.env.qa" .
cp "$CURRENT_DIR/.env.prod" .

# Update package.json with project name
print_message "Updating package.json..." "$YELLOW"
cd frontend
sed -i '' "s/\"name\": \"frontend\"/\"name\": \"$PROJECT_NAME-frontend\"/" package.json
cd ..

# Update pom.xml with project name
print_message "Updating pom.xml..." "$YELLOW"
cd backend
sed -i '' "s/<artifactId>backend<\/artifactId>/<artifactId>$PROJECT_NAME-backend<\/artifactId>/" pom.xml
cd ..

# Create initial commit
print_message "Creating initial commit..." "$YELLOW"
git add .
git commit -m "Initial commit: Project setup from boilerplate"

# Create README.md
print_message "Creating README.md..." "$YELLOW"
cat > README.md << EOL
# $PROJECT_NAME

This project was generated using the Full Stack Application boilerplate.

## Getting Started

1. Install dependencies:
   \`\`\`bash
   # Frontend
   cd frontend
   npm install
   
   # Backend
   cd backend
   ./mvnw clean install
   \`\`\`

2. Start the application:
   \`\`\`bash
   # Frontend
   cd frontend
   npm start
   
   # Backend
   cd backend
   ./mvnw spring-boot:run
   \`\`\`

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:9090
   - H2 Console: http://localhost:9090/h2-console

## Docker Deployment

To run the application using Docker:

\`\`\`bash
# Development
docker-compose -f docker-compose.dev.yml up --build

# QA
docker-compose -f docker-compose.qa.yml up --build

# Production
docker-compose -f docker-compose.prod.yml up --build
\`\`\`

## Environment Configuration

The application supports three environments:
- Development (H2)
- QA (MySQL)
- Production (PostgreSQL)

See the README.md in the root directory for detailed configuration instructions.
EOL

print_message "Project $PROJECT_NAME has been created successfully!" "$GREEN"
print_message "Next steps:" "$YELLOW"
print_message "1. cd $PROJECT_NAME" "$GREEN"
print_message "2. Follow the instructions in README.md to start development" "$GREEN" 