const db = require('mongoose')
const Model = require('./model')

const password = '?#JpCC23()'

const uri = 'mongodb://jepepper:'+encodeURIComponent(password)+'@cluster1-shard-00-00.ngybk.mongodb.net:27017,cluster1-shard-00-01.ngybk.mongodb.net:27017,cluster1-shard-00-02.ngybk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ulxxib-shard-0&authSource=admin&retryWrites=true&w=majority'

db.Promise = global.Promise
db.connect(uri,{
    useNewUrlParser: true
})

console.log('[db]: Connected Succesfully')


function addMessage(message){
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

function getMessage(){
    return list
}

module.exports = {
    add:addMessage,
    list:getMessage,
    //get
    //update
    //delete
}