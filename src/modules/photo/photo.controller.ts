import Photo from './photo.model';
import * as multer from 'multer';

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

const storage = multer.diskStorage({
destination: function (req, file, cb) {
 cb(null, './upload/');
    },
 filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

export function uploads(req,res,next){
    console.log("Uploading Files");
    // console.log("Original Name Is"+req.files[0].originalname);
        
        console.log("Original Name Is"+req.files[0].originalname);
        
        let photo = new Photo ({
            // ownerId: req.files[0].ownerId,
            // albumId: req.files[0].albumId,
            fieldname:req.files[0].fieldname,
            originalname: req.files[0].originalname,
            encoding: req.files[0].encoding,
            mimetype: req.files[0].mimetype,
            destination:req.files[0].destination,
            filename: req.files[0].filename,
            path: req.files[0].path,
            size: req.files[0].size
        })
        // console.log("Original Name Is"+req.files[0].originalname);
        photo.save(function(err){
            if (err){console.log(err)}
            else {
                res.redirect('/');
            }
        })
        console.log("Uploading Done");
    
}
