const store = require('./store')

function addMessage(chat,user,message,file){

    return new Promise((resolve,reject) =>{
        if(!user || !message || !chat){
            console.log('[messageController]: No hay usuario o mensaje')
            return reject('Los Datos son incorrectos')
        }else{
            let fileUrl = ''
            if(file){
                fileUrl = `http://localhost:3000/app/files/${file.filename}`
            }

            const fullMessage = {
                chat:chat,
                user: user,
                message: message,
                date: new Date(),
                file:fileUrl
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