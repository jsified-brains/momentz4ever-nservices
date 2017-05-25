import * as express from 'express';

let app = express();
app.get("/", (req, res)=>{
  res.send("hello from NodeJS/Express");
});

//start the  express application (web server) and keep listening for any reqest sent to port 1337
app.listen(1337 , () => console.log("ready on port 1337"));