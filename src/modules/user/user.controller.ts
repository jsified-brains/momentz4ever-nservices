import User from './user.model';

export async function add(request, response){
    try {
        //see if user already exists
        const user = await User.findOne({id: request.body.id});
        if(!user){
            const user = await User.create(request.body);
            return response.status(201).json(user);
        } 
        return response.status(200).json(user);       
    } catch(err){
        return response.status(500).json(err);
    }
}
