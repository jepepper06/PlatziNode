const express = require('express')
const bodyParser = require('body-parser')
const app = express()


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