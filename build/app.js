"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const minimist = require("minimist");
const swaggerNodeExpress = require("swagger-node-express");
var app = express();
var subpath = express();
var argv = minimist(process.argv.slice(2));
app.use(bodyParser());
app.use("/v1", subpath);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var swagger = swaggerNodeExpress.createNew(subpath);
app.use(express.static('swagger'));
//setting up swagger  config
swagger.setApiInfo({
    title: "example API",
    description: "API to do something, manage something...",
    termsOfServiceUrl: "",
    contact: "yourname@something.com",
    license: "",
    licenseUrl: ""
});
//setting up route for swagger index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/swagger/index.html');
});
//setting up URL for swagger api - docs
swagger.configureSwaggerPaths('', 'api-docs', '');
// Configure the API domain
var domain = 'localhost';
if (argv.domain !== undefined)
    domain = argv.domain;
else
    console.log('No --domain=xxx specified, taking default hostname "localhost".');
// Configure the API port
var port = 1337;
if (argv.port !== undefined)
    port = argv.port;
else
    console.log('No --port=xxx specified, taking default port ' + port + '.');
// Set and display the application URL
var applicationUrl = 'http://' + domain + ':' + port;
console.log('snapJob API running on ' + applicationUrl);
swagger.configure(applicationUrl, '1.0.0');
//configure app
//app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));
app.use(require('./albums'));
app.use(require('./users'));
app.listen(1337, () => console.log('ready on port 1337'));
