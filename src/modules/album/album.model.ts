import * as mongoose from 'mongoose';

const AlbumSchema = new mongoose.Schema ({
    ownerId: {
        type: String,
        trim: true
        // required: [true, 'ownerId is required']
    },
    title: {
        type: String,
        trim: true
        // required: [true, 'Album title required'] 
    },
    description: {
        type: String,
        trim: true
        // required: [true, 'Album description required'] 
    },
    imageName:{
        type: String,
        trim: true
    },
    // coverImage: {
    //     data: Buffer
    //     // contentType: String
        
    // },
    coverImage: {
        type: Buffer
        // contentType: String
        
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    lastViewedOn: {
        type: Date,
        default: Date.now 
    }

});

export default mongoose.model('Album', AlbumSchema)

