FROM node:10

# Create app directory
WORKDIR /usr/src/Template

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build:pro

EXPOSE 3030

CMD [ "npm", "run", "server" ]