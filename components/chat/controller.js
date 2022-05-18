const store = require('./store')

function listChats(userId){
    return new Promise((resolve, reject) =>{
        resolve(store.list(userId))
    }) 
} 

function addChat(users){
    
        if(!users || !Array.isArray(users)){
            return new Promise.reject('Invalid users list: ')
        }
        const chat = {
            users: users
        }
        return store.add(chat)
    
}

module.exports = {
    listChats,
    addChat
}