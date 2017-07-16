FROM node:7.0.0

RUN npm install --global typescript \
    && npm install --global rimraf \
    && git clone https://github.com/jsified-brains/momentz4ever-services.git /var/www \
	&& cd /var/www \
    && npm install \
    && npm run build

EXPOSE 1337

WORKDIR /var/www
ENTRYPOINT ["npm", "run", "startServer"]
