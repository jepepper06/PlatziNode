var express = require('express')

var router = express.Router()

app.use(router)

router.get('/message', function(req,res){
    res.send('Hola desde un GET')
})

router.post('/message', function(req,res){
    res.send('Hola desde un POST')
})

let PORT = 3000

app.listen(PORT, ()=>{
    console.log(`SERVIDOR EN EL PUERTO ${PORT}`);
})