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

function getMessages(user){
    return new Promise((resolve,reject)=>{
        resolve(store.list(user))
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


function deleteMessage(id){
    return  new Promise((resolve,reject) =>{
        if(!id){
            reject('Id invalido')
        }else{
        store.delete(id)
            .then(()=>{
                resolve()
            }).catch(e =>{
                reject(e )
            })
        }
        
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}