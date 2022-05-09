const express = require('express')
const bodyParser = require('body-parser')

const app = express()

var router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)


router.get('/message', function(req,res){

    // se declara una variable para hacer print
    let headers = req.headers
    console.log(headers)

    // se declara un header de respuesta 
    res.header({"custom-header":"este es un header propio"})
    res.send('Hola desde un GET')
})

router.post('/message', function(req,res){
    res.send('Hola desde un POST')
})

router.delete('/message', function(req,res){
    let text = req.body.text
    let query = req.query
    console.log(req.body)
    console.log(req.body.Puta)
    console.log(query)
    res.send('Eres una '+text)
})

let PORT = 3000

app.listen(PORT, ()=>{
    console.log(`SERVIDOR EN EL PUERTO ${PORT}`);
})