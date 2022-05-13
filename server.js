const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const message = require('./components/message/url')
const db = require('./db')
db.conn(message.url())

db.conn(message.password)
const router = require('./network/routes')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(router)

router(app)

app.use('/app',express.static('public'))
let PORT = 3000

app.listen(PORT, ()=>{
    console.log(`SERVIDOR EN EL PUERTO ${PORT}`);
})