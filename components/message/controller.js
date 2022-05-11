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
        
            console.log(fullMessage)
            return resolve(fullMessage)
        }
    })

}

module.exports = {
    addMessage
}