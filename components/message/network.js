const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function(req,res){

    // se  hace print de los headers
    console.log(req.headers)

    // se declara un header de respuesta 
    res.header({"custom-header":"este es un header propio"})

    response.success(req,res,'Lista de mensajes')
})

router.post('/', function(req,res){
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req,res,fullMessage,201)
        }).catch(e => {
            response.error(req,res,'Informacion Invalida',400,'Error en controlador')
        })
})

module.exports = router