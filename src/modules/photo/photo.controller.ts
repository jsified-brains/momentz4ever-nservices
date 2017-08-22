import Photo from './photo.model';

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

