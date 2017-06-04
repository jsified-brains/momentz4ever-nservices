import * as express from 'express';
import * as path from 'path';
//import bodyParser from 'body-parser';
var app=express();

//configure app
//app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));

app.use(require('./albums'));
app.use(require('./users'));

app.listen(1337, () => console.log('ready on port 1337') );