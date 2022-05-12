const store = require('./store')

function addMessage(user,message){

    return new Promise((resolve,reject) =>{
        if(!user || !message){
            console.log('[messageController]: No hay usuario o mensaje')
            return reject('Los Datos son incorrectos')
        }else{

            const fullMessage = {
                user: user,
                message: message,
                date: new Date(),
            }
        
            store.add(fullMessage)
            return resolve(fullMessage)
        }
    })

}

function getMessages(){
    return new Promise((resolve,reject)=>{
        resolve(store.list())
    })
}

function updateMessage(id,message){
    return new Promise(async (resolve,reject) =>{

       if(!id || !message){
           reject('No hay datos suficientes')

       }else{
        const result = await store.update(id,message)
        return  resolve(result)

       }
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}