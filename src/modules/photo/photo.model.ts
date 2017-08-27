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
    fieldname:{
        type: String,
        trim: true,
    },
    originalname:{
        type: String,
        trim: true,
    },
    filename:{
        type: String,
        trim: true,
    },
    encoding: {
        type: String,
        trim: true,
    },
    mimetype:{
        type: String,
        trim: true,   
    },
    destination: {
        type: String,
        trim: true,
    },
    size:{
        type: String,
    },
    path: {
        type: String,
        trim: true,
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

