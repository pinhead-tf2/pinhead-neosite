# Use an official Nginx runtime as the base image
FROM nginx:latest

# Copy your website files into the container
COPY ./public /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Add a volume to persist data
VOLUME /usr/share/nginx/html

# Run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
