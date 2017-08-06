import * as mongoose from 'mongoose';

const AlbumSchema = new mongoose.Schema ({
    id: {
        type: String,
        unique: String,
        auto: true
    },
    ownerId: {
        type: String,
        trim: true,
        required: [true, 'ownerId is required']
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
    coverImageUrl: {
        type: String,
        trim: true,
        required: [true, 'Album name required'] 
    },
    createdOn: {
        type: DteStriDng,
        trim: true,
        required: [true, 'Album name required'] 
    },
    lastViewedOn: {
        type: String,
        trim: true,
        required: [true, 'Album name required'] 
    }

});

