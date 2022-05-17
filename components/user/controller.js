const store = require('./store')


function addUser(name){

    const user = {
        name,
        date: new Date()
    }
    return store.add(user)

}

function listUsers(){
    return store.list()
}

module.exports = {
    addUser,
    listUsers
}