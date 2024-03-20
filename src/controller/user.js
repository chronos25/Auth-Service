const User = require("../model/user");

async function createUser(reqBody){
    try{
        console.log("Received request to create new user", reqBody);
        const user = await User.create({ 
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            phone: reqBody.phone,
            email: reqBody.email,
            password : reqBody.password
         });

         if(!user){
            return { status : 404, message: 'bad request' };
         } 
         return { status: 201, message: 'created new user' };
    } catch(e){
        console.error('Error while creating user', e);
    }
}

async function findUser(reqBody){
    try{
        console.log('Received request to find a user', reqBody);
        const user = await User.find({email: reqBody.email});
        if(!user){
            return { status : 404, message: 'bad request' };  
        }
        return { status: 200, messages: 'user exists'};
    } catch(e){
        console.error('Error while searching user',e);
    }
}

async function updateUser(userId, reqBody){
    try{
        console.log('Received request to update a user', reqBody);
        const user = await User.findById({"_id": userId});
        if(userId){
            const updateUser = await User.findOneAndUpdate({email: reqBody.email}, 
                { firstName: reqBody.firstName,
                lastName: reqBody.lastName,
                phone: reqBody.phone
            });
            if(!updateUser){
                return { status : 404, message: 'bad request' };  
            }
            return { status: 200, messages: 'user updated'};
        }
        return { status : 404, message: 'bad request' };
    } catch(e){
        console.error('Error while updating user',e);
    }
}

module.exports = {
    createUser, 
    findUser, 
    updateUser
};