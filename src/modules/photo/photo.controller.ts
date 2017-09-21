import Photo from './photo.model';
import * as multer from 'multer';
import * as path from 'path';

export async function add(req, res){
    try {
        const photo = await Photo.create(req.body);
        return res.status(201).json(photo);
    } catch(err) {
        return res.status(500).json(err);
    }
}
export async function get(request, response){
    try {
        console.log("Album ID :" +request.params.id);
        //see if user already exists
        const photo = await Photo.find({albumId: request.params.id});     
        return response.status(200).json(photo);       
    } catch(err){
        return response.status(500).json(err);
    }
}

export function uploads(req,res,next){
    console.log("Uploading Files");
    let filecount= req.files.length;
      for(let i=0;i<filecount;i++){  
        console.log("Original Name Is"+req.files[i].originalname);
        let photo = new Photo ({
            ownerId: req.body.ownerId,
            albumId: req.body.albumId,
            fieldname:req.files[i].fieldname,
            originalname: req.files[i].originalname,
            encoding: req.files[i].encoding,
            mimetype: req.files[i].mimetype,
            destination:req.files[i].destination,
            filename: req.files[i].filename,
            path: req.files[i].path,
            size: req.files[i].size
        })
        photo.save(function(err){
            if (err){console.log(err)}
        })
    }
    return res.json(200);
}

export async function getById(request, response){
    console.log(request);
    let imagePath=path.resolve(__dirname+'/../../../upload');
     try {
        const photo = await Photo.find({albumId:request.params.id} && {originalname:request.params.name});
        let a = JSON.stringify(photo[0]);
        let a1 = JSON.parse(a);
        let imgName=a1.originalname;
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
