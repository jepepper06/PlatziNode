const db = require('mongoose')
const Model = require('./model')
const password = ''

const uri = 'mongodb://jepepper:1234567890@cluster1-shard-00-00.ngybk.mongodb.net:27017,cluster1-shard-00-01.ngybk.mongodb.net:27017,cluster1-shard-00-02.ngybk.mongodb.net:27017/HolaPutas?ssl=true&replicaSet=atlas-ulxxib-shard-0&authSource=admin&retryWrites=true&w=majority'
// const uri = 'mongodb+srv://jepepper:1234567890@cluster1.ngybk.mongodb.net/HolaPutas?retryWrites=true&w=majority'


db.Promise = global.Promise

db.connect(uri,{
    useNewUrlParser: true
}).then(() =>{
    console.log('[db]: Connected Succesfully')
}).catch(e =>{
    console.error('[Error in connection with mongo]: '+e)
})



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

module.exports = {
    add:addMessage,
    list:getMessage,
    //get
    update:updateMessage,
    //delete
}