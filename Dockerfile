ARG NODE_VERSION=20.17.0

# Use a multi-stage build to keep the final image small
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Install global dependencies
RUN npm install -g @angular/cli

# Expose the port the app runs on
EXPOSE 4200

# Command to run the application
CMD ["ng", "serve", "--host", "0.0.0.0"]
