

interface COMMON_CONFIG {
    PORT: string
}

interface ENV_CONFIG {
    MONGO_URL: string
}

interface APP_CONFIG extends COMMON_CONFIG, ENV_CONFIG {
}

const devConfig: ENV_CONFIG = {
    MONGO_URL : 'mongodb//localhost/momentz4ever-api-dev'
}

const testConfig: ENV_CONFIG = {
    MONGO_URL : 'mongodb//localhost/momentz4ever-api-test'
}

const prodConfig: ENV_CONFIG = {
    MONGO_URL : 'mongodb//localhost/momentz4ever-api-prod'
}

const commonConfig: COMMON_CONFIG = {
    PORT: process.env.PORT || 1337
}

function getEnvConfig(env) {
    switch(env){
        case 'prod':
        case 'production':
            return prodConfig;
        case 'test':
            return  testConfig;
        default:
            return devConfig;

    }
}

console.log('process.env.NODE_ENV=', process.env.NODE_ENV);
const envVars = getEnvConfig(process.env.NODE_ENV || 'dev');

const AppConfig: APP_CONFIG = <APP_CONFIG>{
    ...commonConfig,
    ...envVars
};

export default AppConfig;


