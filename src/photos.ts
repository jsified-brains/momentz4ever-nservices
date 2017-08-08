var express = require('express');
var router = express.Router();

//local data 
var albumId : "integer";
// type photo = { title: string, photoId: number, description: string,imageUrl:string, createdDate:string};
// let photoArray: photo[] = new Array();
// let myPhotos: Map<number, photo[]> = new Map<number, photo[]>();

var myPhotos=[
[{
    title : "Picture 1",
    photoId : 1,
    likeCount:0,
    comment:0,
    description : "This is the First Picture",
    imageUrl:"http://www.flowerspictures.org/image/flowers/blanket-flowers/blanket-flower-fully-open.jpg",
    createdDate:"05/05/2017"
 },
 { 
        title:"Picture 2",
        photoId:2,
        likeCount:0,
        comment:0,
        description:"This is the Second Picture",
        imageUrl:"http://drawabox.com/images/lesson3/ref_hibiscusflower.jpg",
        createdDate:"05/04/2017"
  }
],
[{
    title : "Picture 3",
    photoId : 3,
    likeCount:0,
    comment:0,
    description : "This is the First Picture",
    imageUrl:"http://www.flowerpictures.net/Flowerpictures/individual_flowers/tulips/images/tulip-19.jpg",
    createdDate:"05/05/2017"
 },
 { 
        title:"Picture 4",
        photoId:4,
        likeCount:0,
        comment:0,
        description:"This is the Second Picture",
        imageUrl:"http://www.flowerpictures.net/Flowerpictures/Flowers-home-2014/images/DSC04002.jpg",
        createdDate:"05/04/2017"
  }
],
[{
    title : "Picture 4",
    photoId : 5,
    likeCount:0,
    comment:0,
    description : "This is the First Picture",
    imageUrl:"http://freeflowerpictures.net/image/flowers/calendula/calendula_39.jpg",
    createdDate:"05/05/2017"
 },
 { 
        title:"Picture 5",
        photoId:6,
        likeCount:0,
        comment:0,
        description:"This is the Second Picture",
        imageUrl:"http://www.flowerpictures.net/Flowerpictures/Flowers-home-2014/images/DSC04703.jpg",
        createdDate:"05/04/2017"
  }
],
[{
    title : "Picture 6",
    photoId : 7,
    likeCount:0,
    comment:0,
    description : "This is the First Picture",
    imageUrl:"http://www.flowerspictures.org/image/flowers/sneezeweed/sneezeweed-plant_21.jpg",
    createdDate:"05/05/2017"
 },
 { 
        title:"Picture 7",
        photoId:8,
        likeCount:0,
        comment:0,
        description:"This is the Second Picture",
        imageUrl:"http://www.flowerspictures.org/image/flowers/gerbera/gerbera-flower_11.jpg",
        createdDate:"05/04/2017"
  }
]
]

//difine routes
router.get('/photos/:id',function(req,res){
    // console.log(myPhotos);
    // let tempphotoArray= myPhotos.get(req.params.id);
    // if(tempphotoArray == null)
    //     res.send("Album Not Found");
    // else
    //     res.send(tempphotoArray);
    if(myPhotos.length>req.params.id)
        res.send(myPhotos[req.params.id]);
    res.send("Album Not Found");
});

module.exports = router;