var express = require('express');
var router = express.Router();
//local data 
var myAlbums = [
    {   
        "title":"Album 1.",
        "id":"1",
        "description":"This is the first album",
        "imageUrl":"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
        "createdDate":"05/05/2017",
        "lastViewedOn":"05/06/2017"
    },
    {   
        "title":"Album 2.",
        "id":"2",
        "description":"This is the second album",
        "imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "createdDate":"05/07/2017",
        "lastViewedOn":"05/08/2017"
    }
];

//difine routes
router.get('/albums',function(req,res){
    res.send(myAlbums);
});

router.get('/albums/:id',function(req,res){
    console.log(req.params.id);
    let albumWithId=myAlbums.filter(function(album){
        return album.id===req.params.id;
    });
    res.send(albumWithId[0]);
});


router.post('/albums',function(req,res){
     let newAlbum=req.body;
     myAlbums.push(newAlbum);
     res.send(myAlbums);
});

module.exports = router;