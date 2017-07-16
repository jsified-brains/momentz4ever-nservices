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
    let albumWithId=myAlbums.filter(function(album){
        return album.id===req.params.id;
    });
    if(albumWithId.length===0){
        res.send("Album Not Found");
    }
    res.send(albumWithId[0]);
});

router.delete('/albums',function(req,res){
    myAlbums=[];
    res.send({"result":"All Albums deleted Successfully",
    "updatedAlbums":myAlbums});
});

router.delete('/albums/:id',function(req,res){
    let albumWithId=myAlbums.filter(function(album){
        return album.id!==req.params.id;
    });
       myAlbums = albumWithId;
    res.send({"result":"Album deleted Successfully",
    "Updated Albums":myAlbums});
});

router.post('/albums',function(req,res){
     let newAlbum=req.body;
     myAlbums.push(newAlbum);
     res.send({"result":"Album Added Successfully",
    "Updated Albums":myAlbums});
});

router.put('/albums/:id',function(req,res){
    for(var i=0;i<myAlbums.length;i++){
            if(myAlbums[i].id===req.params.id){
                myAlbums[i].id = req.params.id;
                myAlbums[i].title = req.body.title;
                myAlbums[i].description = req.body.description;
                myAlbums[i].imageUrl = req.body.imageUrl;
                myAlbums[i].createdDate = req.body.createdDate;
                myAlbums[i].lastViewedOn = req.body.lastViewedOn;
                res.send(myAlbums[i]);
        }
            else{
                res.send("Album Not Found");
        }
    }
});

module.exports = router;