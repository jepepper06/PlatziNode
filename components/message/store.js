const Model = require('./model')

function addMessage(message){
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessage(){
    // return list
    const messages = await Model.find()
    return messages
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