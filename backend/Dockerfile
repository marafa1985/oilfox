FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*","tsconfig.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
EXPOSE 4000
CMD npm start