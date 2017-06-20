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

router.post('/userspost',function(req,res){
     let newUser=req.body;
     myUsers.push(newUser);
     res.send({"result":"User Added Sussesfully",
    "updatedUsers":myUsers});
});

module.exports = router;