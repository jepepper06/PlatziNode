const socketIO = require('socket.io')
const socket = {}

function connectIO(server){

    socket.io = socketIO(server)
}

module.exports = {
    connectIO,
    socket
}