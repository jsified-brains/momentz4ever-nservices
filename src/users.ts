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

router.get('/users/:id',function(req,res){
    console.log(req.params.id);
    let userWithId=myUsers.filter(function(user){
        return user.id===req.params.id;
    });
    if(userWithId.length===0){
        res.send("User Not Found");
    }
    res.send(userWithId[0]);
});

router.delete('/users',function(req,res){
    myUsers=[];
    res.send({"result":"All Users deleted Successfully",
    "updatedUsers":myUsers});
});

router.delete('/users/:id',function(req,res){
    console.log(req.params.id);
    let userWithId=myUsers.filter(function(user){
        return user.id!==req.params.id;
    });
       myUsers = userWithId;
    res.send({"result":"User deleted Successfully",
    "updatedUsers":myUsers});
});

router.post('/users',function(req,res){
     let newUser=req.body;
     myUsers.push(newUser);
     res.send({"result":"User Added Successfully",
    "updatedUsers":myUsers});
});

router.put('/users/:id', function (req, res) {
    for (var i = 0; i < myUsers.length; i++) {
        if (myUsers[i].id === req.params.id) {
            myUsers[i].id = req.params.id;
            myUsers[i].firstName = req.body.firstName;
            myUsers[i].lastName = req.body.lastName;
            myUsers[i].email = req.body.email;
            res.send(myUsers[i]);
        }
        else {
            res.send("User Not Found");
        }
    }
});

module.exports = router;
