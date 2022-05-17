const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.post('/', function(req,res){
    controller.addUser(req.body.name)
        .then(name =>{
            response.success(req,res,name,201)
        }).catch(e =>{
            response.error(req,res,'Internal Error', 500, e)
        })
})

router.get('/', function(req,res){
    controller.listUsers()
        .then( users =>{
            response.success(req,res,users,200)
        }).catch(e =>{
            response.error(req,res,'Internal Error',500,e)
        })
})

module.exports = router