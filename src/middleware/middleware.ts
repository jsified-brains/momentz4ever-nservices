import * as bodyParser  from 'body-parser'; 
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as express from 'express';

const AppMiddleWare  = (app: express.Express) => {

    console.log('process.env.NODE_ENV',  process.env.NODE_ENV);
    commonMiddleware(app);
    switch(process.env.NODE_ENV){
        case 'development':
        case 'dev':
            devMiddleware(app);
            break;
        case 'test':
            testMiddleware(app);
            break;
         case 'prod':
            prodMiddleware(app);
            break;
    }
}

const commonMiddleware = (app: express.Express) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

const devMiddleware = (app: express.Express) => {
    app.use(morgan('dev'));
}

const testMiddleware = (app: express.Express) => {
    app.use(morgan('dev'));
}

const prodMiddleware = (app: express.Express) => {
    app.use(compression());
    app.use(helmet());
}

export default AppMiddleWare; 
