const express = require('express')
const router = express.Router()
const multer = require('multer')
const response = require('../../network/response')
const controller = require('./controller')
const upload = multer({dest:'public/files/',})

router.get('/', function(req,res){
    const fiterMessages = req.query.user || null
    controller.getMessages(fiterMessages)
        .then(messageList => {
            response.success(req,res,messageList,200)
        }).catch(e =>{
            response.error(req,res,'Unexpected Error',500, e)
        })
})

router.post('/', upload.single('file'),function(req,res){

    controller.addMessage(req.body.chat,req.body.user, req.body.message,req.file)
        .then((fullMessage)=>{
            response.success(req,res,fullMessage,201)
        }).catch(e => {
            response.error(req,res,'Informacion Invalida',400,e)
        })
})

router.patch('/:id', function(req,res){
    // console.log(req.params.id)

    controller.updateMessage(req.params.id,req.body.message)
        .then( (data) =>{
            response.success(req,res,data,200)
        }).catch(e =>{
            response.error(req,res,'Error actualizando',500,e)
        })
})

router.delete('/:id', function(req,res){
    controller.deleteMessage(req.params.id)
        .then((data)=>{
            response.success(req,res,data,200)
        }).catch(e =>{
            response.error(req,res,'Error interno',500,e)
        })
})

module.exports = router