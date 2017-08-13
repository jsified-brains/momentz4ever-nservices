import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        required: [true, 'id is required'],
        unique:true
    },
    oAuthProvider: {
        type: String,
        trim: true,
        default: 'facebook'
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'name is required']
    },
    first_name: {
        type: String,
        trim: true,
        required: [true, 'First Name is required']
    },
    last_name: {
        type: String,
        trim: true,
        required: [true, 'Last Name is required']
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique:true
    },
    picture:{
        data:{
            is_silhouette: {
                type: Boolean,
                default: false
            },
            url: {
                type: String,
                trim: true,
                required: [true, 'Picture URL is required']
            }
        }
    }

});

export default mongoose.model('User', UserSchema);

