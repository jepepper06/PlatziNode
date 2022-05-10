const express = require('express')
const message = require('../components/message/network')

const routes = function(pipe){
    pipe.use('/message',message)
}

module.exports = routes