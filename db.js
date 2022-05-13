const db = require('mongoose')

async function conn(url){
    


db.Promise = global.Promise

await db.connect(url,{
    useNewUrlParser: true
}).then(() =>{
    console.log('[db]: Connected Succesfully')
}).catch(e =>{
    console.error('[Error in connection with mongo]: '+e)
})
   

}

module.exports = {conn}

