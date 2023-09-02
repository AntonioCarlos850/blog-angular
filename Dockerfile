FROM node:16

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

RUN npm install -g @angular/cli

CMD [ "tail", "-f", "/dev/null"]