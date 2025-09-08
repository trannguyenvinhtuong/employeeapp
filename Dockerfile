# Stage 1: Build React app bằng Node 14
FROM node:14 as build

# Set working directory
WORKDIR /app

# Copy package.json và cài dependency
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build production
RUN npm run build

# Stage 2: Serve bằng Nginx
FROM nginx:stable-alpine

# Copy file build React vào thư mục nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy file cấu hình nginx tùy chỉnh (nếu có)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
