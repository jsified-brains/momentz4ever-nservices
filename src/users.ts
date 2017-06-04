var express = require('express');
var router = express.Router();
//local data 
var myUsers = [
    {   
        "id":"1",
        "firstName": "Nilesh",
        "lastName" : "Deshmukh",
        "email" : "n.deshmukh@gmail.com"
    },
    {   
        "id":"2",
        "firstName": "Rakesh",
        "lastName" : "Verma",
        "email" : "r.verma@gmail.com"
    }
];

//difine routes
router.get('/users',function(req,res){
    res.send(myUsers);
});

// router.post('/albums',function(req,res){
//     let newAlbum=req.body.newAlbum;
//     myAlbums.push(newAlbum);
//     res.send(myAlbums);
// });

module.exports = router;