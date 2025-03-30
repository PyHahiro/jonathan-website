# Use the official Node.js image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the Next.js app in production mode
RUN pnpm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["pnpm", "start"]

