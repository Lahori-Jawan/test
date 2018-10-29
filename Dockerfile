FROM node:8.12.0

ENV DIR /live

WORKDIR ${DIR}

COPY package*.json ${DIR}/
COPY yarn.lock ${DIR}/

RUN yarn install
RUN yarn build

COPY . .

EXPOSE 3000

ENV HOST 0.0.0.0
