const Model = require('./model')

function listChats(userId){
    // getting Chat
    return new Promise((resolve, reject) =>{
        let filter = {}
        if(userId !== null){
            filter = {
                users: userId,
            }
        }
        Model.find(filter)
            .populate('users')
            .exec((error,populated) => {
                if(error){
                    reject(error)
                    return false
                }
                resolve(populated)
            })
    })
}

function addChats(chat){
    const myChat = Model(chat)
    return myChat.save()
}

module.exports = {
    list:listChats,
    add:addChats,
}