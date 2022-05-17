const Model = require('./model')

function addUser(user){
    if(!user){
        return Promise.reject('No user')
    }
    const myUser = new Model(user)
    return myUser.save()
}


function listUsers(){
return Model.find()
}

function updateUser(id,name){
    return Model.updateOne({_id:id},{name:name})  
}

module.exports = {
    add:addUser,
    list:listUsers,
}