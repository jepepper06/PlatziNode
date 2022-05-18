const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function(req,res){
    const users = req.query.userId || null
    controller.listChats(users)
        .then(data => {
            response.success(req,res,data,200)
        }).catch(e =>{
            response.error(req,res,'Internal Error',500,e)
        })
})

router.post('/', function(req,res){
    controller.addChat(req.body.users)
        .then( data => {
            response.success(req,res,data,201)
        }).catch( e =>{
            response.error(req,res,'Internal Error',500,e)
        })
})

module.exports = router