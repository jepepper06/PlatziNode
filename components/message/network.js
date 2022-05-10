const express = require('express')
const router = express.Router()
const response = require('../../network/response')

router.get('/', function(req,res){

    // se  hace print de los headers
    console.log(req.headers)

    // se declara un header de respuesta 
    res.header({"custom-header":"este es un header propio"})

    response.success(req,res,'Lista de mensajes')
})

router.post('/', function(req,res){
    console.log(req.query)

    if(req.query.error == "ok"){
        response.error(req,res,'Error inesperado',400, 'Es solo una simulacion de error')
    }else{
        response.success(req,res,'Creado correctamente',201)
    }
})

module.exports = router