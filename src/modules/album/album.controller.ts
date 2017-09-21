import Album from './album.model';
import * as fs from 'fs';
import * as path from 'path';

export async function add(req, res){
    let imagePath='./upload';
    let newAlbum = new Album ({
        ownerId: req.body.ownerId,
        albumId: req.body.albumId,
        title:req.body.title,
        description: req.body.description,
        imageName: req.body.coverImage,
        coverImage:new Buffer(imagePath+'/'+req.body.coverImage, "base64")
    });
    newAlbum.save((err,savedAlbum)=>{
      if(err){
        console.log("Error saving Album");
      } else {
        res.json(savedAlbum);
      }
    })
}

export async function get(request, response){
    try {
        //see if user already exists
        const album = await Album.find();  
        return response.status(200).json(album);       
    } catch(err){
        return response.status(500).json(err);
    }
}

export async function getById(request, response){
    let imagePath=path.resolve(__dirname+'/../../../upload');
     try {
        const album = await Album.find({_id:request.params.id});
        let a = JSON.stringify(album[0]);
        let a1 = JSON.parse(a);
        let imgName=a1.imageName;
        var options = {
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true,
                'Content-Type':'image/jpeg'
            }
          };

        response.set('Content-Type', 'image/jpeg');
        response.contentType('image/jpg');
        response.sendFile(imagePath+'/'+imgName,options);

    } catch(err){
        return response.status(500).json(err);
    }
}
