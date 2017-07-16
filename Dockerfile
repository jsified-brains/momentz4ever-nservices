FROM node:7.0.0

RUN git clone https://github.com/jsified-brains/momentz4ever-services.git /var/www \
    && cd /var/www \
    && npm install --global rimraf \
    && npm run clean \
    && npm install \
    && npm run build

EXPOSE 1337

WORKDIR /var/www
ENTRYPOINT ["npm", "run", "startServer"]
