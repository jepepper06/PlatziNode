const express = require('express')
const bodyParser = require('body-parser')

const app = express()

var router = express.Router()

app.use(bodyParser.json())
app.use(router)


router.get('/message', function(req,res){
    res.send('Hola desde un GET')
})

router.post('/message', function(req,res){
    res.send('Hola desde un POST')
})

router.delete('/message', function(req,res){
    let text = req.body.text
    console.log(text)
    res.send('Eres una '+text)
})

let PORT = 3000

app.listen(PORT, ()=>{
    console.log(`SERVIDOR EN EL PUERTO ${PORT}`);
})