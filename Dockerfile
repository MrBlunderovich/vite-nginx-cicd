# Step 1: Use the official Node.js image as the base image
FROM node:20

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install dependencies (using npm install)
RUN npm install

# Step 5: Install the `serve` package globally
RUN npm install -g serve

# Step 6: Copy the rest of the application files
COPY . .

# Step 7: Build the application (produces the `dist` folder)
RUN npm run build

# Step 8: Expose the port the app will run on (same as what will be proxied by Nginx)
EXPOSE 8080

# Step 9: Use the `serve` package to serve the build folder
CMD ["serve", "-s", "dist", "-l", "8080"]
