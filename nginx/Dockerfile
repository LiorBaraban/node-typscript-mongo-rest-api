# Set nginx base image
FROM nginx

# File Author / Maintainer
MAINTAINER Lior Baraban


RUN rm /etc/nginx/nginx.conf

# Copy custom configuration file from the current directory

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80