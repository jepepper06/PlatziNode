const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function(req,res){
    controller.getMessages()
        .then(messageList => {
            response.success(req,res,messageList,200)
        }).catch(e =>{
            response.error(req,res,'Unexpected Error',500, e)
        })
})

router.post('/', function(req,res){
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req,res,fullMessage,201)
        }).catch(e => {
            response.error(req,res,'Informacion Invalida',400,'Error en controlador')
        })
})

router.patch('/:id', function(req,res){
    // console.log(req.params.id)

    controller.updateMessage(req.params.id,req.body.message)
        .then( () =>{
            response.success(req,res,'Actulizado',200)
        }).catch(e =>{
            response.error(req,res,'Error actualizando',500,e)
        })
})

module.exports = router