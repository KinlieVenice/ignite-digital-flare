FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build the production files
RUN npm run build

# Install a simple static file server
RUN npm install -g serve

EXPOSE 3000

# Serve the 'dist' folder on port 3000
CMD ["serve", "-s", "dist", "-l", "8000"]