const Model = require('./model')

async function addMessage(message){
    // list.push(message)
    const myMessage = new Model(message)
    return await myMessage.save()
}

async function getMessage(user){
    // return list
    return new Promise((resolve,reject) => {
        let filter = {}
        if(user !== null){
            filter = {user: user}
        }
    
        Model.find(filter)
            .populate('chat')
            .populate('user')
            .exec((error,populated) => {
                if(error){
                    reject(error)
                    return false
                }
                resolve(populated)
            })
    })
    
}

async function updateMessage(id,message){
    //algo para registrar un mensaje

    updatedMessage = await Model.updateOne({_id:id},{message:message})

    return updatedMessage
    
}
function deleteMessage(id){
    return Model.deleteOne({_id:id})

}

module.exports = {
    add:addMessage,
    list:getMessage,
    //get
    update:updateMessage,
    delete:deleteMessage
}