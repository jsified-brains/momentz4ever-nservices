import Album from './album.model';

export async function add(req, res){
    try {
        const album = await Album.create(req.body);
        return res.status(201).json(album);
    } catch(err) {
        return res.status(500).json(err);
    }
}


