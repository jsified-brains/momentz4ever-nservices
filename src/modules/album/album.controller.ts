import Album from './album.model';

export async function add(req, res){
    try {
        const album = await Album.create(req.body);
        return res.status(201).json(album);
    } catch(err) {
        return res.status(500).json(err);
    }
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

// export async function getById(request, response){
//     try {
//         //see if user already exists
//         const album = await Album.findOne({_id:'5996356d1b46c304ecd23307'});     //findOne({ownerId: '001'});
//         if(!album){
//             const user = await Album.create(request.body);
//             return response.status(201).json(album);
//         } 
//         return response.status(200).json(album);       
//     } catch(err){
//         return response.status(500).json(err);
//     }
    
//     // return response.send({Album:JSON});
//     //  return response.status(200).json([{
//     //      'ownerId':'007'
//     //  }]); 
// }
