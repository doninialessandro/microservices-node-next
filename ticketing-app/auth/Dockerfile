FROM node:alpine

# create app directory
RUN mkdir -p /app && chown -R node:node /app

# set working directory
WORKDIR /app

# prefer not to run as root
USER node

# copy files and install dependencies
COPY --chown=node package.json .
RUN npm install
COPY --chown=node . .

CMD ["npm", "start"]