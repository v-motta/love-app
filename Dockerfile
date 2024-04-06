FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

# needs to be /browser because angular 17.0.0+ has a different output structure
COPY --from=build /app/dist/love-app/browser /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]