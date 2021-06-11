FROM node:15.14.0-alpine3.10

WORKDIR /app
COPY package.json ./
RUN npm install --only=prod
COPY ./ ./
CMD ["npm", "start"]