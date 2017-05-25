"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
//import bodyParser from 'body-parser';
var gapp = express();
//configure app
gapp.set('view engine', 'ejs');
gapp.set('views', path.join(__dirname, 'views'));
//gapp.use(bodyParser());
//local data 
var myAlbums = [
    { "title": "Album 1.",
        "id": "1",
        "description": "This is the first album",
        "imageUrl": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
        "createdDate": "05/05/2017",
        "lastViewedOn": "05/06/2017"
    },
    { "title": "Album 2.",
        "id": "2",
        "description": "This is the second album",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "createdDate": "05/07/2017",
        "lastViewedOn": "05/08/2017"
    }
];
//difine routes
gapp.get('/', (req, res) => {
    //load data 
    res.render('index', {
        title: "My Albums",
        albums: myAlbums
    });
});
gapp.post('/', (req, res) => {
    //var newAlbum=req.body.newAlbum;
    //myAlbums.push({
    //   id:my
    //console.log(newAlbum);
});
gapp.listen(1337, () => console.log('ready on port 1337'));
