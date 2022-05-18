const express = require('express')
const app = express()
const server = require('http').Server(app)
const cors = require('cors')

const message = require('./components/message/url')
const db = require('./db')
db.conn(message.url())
const socket = require('./socket').connectIO
const router = require('./network/routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(router)

socket(server)
router(app)

app.use('/app',express.static('public'))
let PORT = 3000

server.listen(PORT, ()=>{
    console.log(`SERVIDOR EN EL PUERTO ${PORT}`);
})