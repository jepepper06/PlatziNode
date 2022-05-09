const express = require('express')
const bodyParser = require('body-parser')

const app = express()

var router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)


router.get('/message', function(req,res){
    let header = req.headers
    console.log(header)
    res.send('Hola desde un GET')
})

router.post('/message', function(req,res){
    res.send('Hola desde un POST')
})

router.delete('/message', function(req,res){
    let text = req.body.text
    let query = req.query
    console.log(text)
    console.log(query)
    res.send('Eres una '+text)
})

let PORT = 3000

app.listen(PORT, ()=>{
    console.log(`SERVIDOR EN EL PUERTO ${PORT}`);
})