import * as mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema ({
    ownerId: {
        type: String,
        trim: true,
    },
     albumId: {
        type: String,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
        required: [true, 'Album title required'] 
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Album description required'] 
    },
    imageUrl: {
        type: String,
        trim: true,
        required: [true, 'Album name required'] 
    },
    likeCount:{
        type: Number,
        trim:true
    },
    comment:{
        type: String,
        trim: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Photo', PhotoSchema)

