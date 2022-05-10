const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')
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

    response.success(req,res,'Lista de mensajes')
})

router.post('/message', function(req,res){
    console.log(req.query)

    if(req.query.error == "ok"){
        response.error(req,res,'Error Simulado',400)
    }else{
        response.success(req,res,'No hay error',201)
    }
})

router.delete('/message', function(req,res){

    // se define las variables body y query
    let text = req.body.text
    let query = req.query
    // se hace print de las variables
    console.log(req.body)
    console.log(query)
    res.status(200).send('Eres una '+text)
})


app.use('/app',express.static('public'))
let PORT = 3000

app.listen(PORT, ()=>{
    console.log(`SERVIDOR EN EL PUERTO ${PORT}`);
})