
# Use a lightweight Node.js image for the build stage
FROM node:latest AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js application
RUN npm run build 

# Use a lightweight server to serve static files
FROM nginx:alpine

# Copy static files from the builder stage to the Nginx html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
