const express = require('express')

const router = express.Router()

router.post('', function(req,res){

    res.send("Usuario creado")
})

router.put('/:id',function(req,res){
    res.send('Usuario actualizada correctamente')
})

router.get('', function(req,res){
    res.send("Lista de usuarios")
})

router.get('/:id', function(req,res){
    const id = req.params.id
    res.send('Detalles del usuario' + id)
})


module.exports = router

//Modos para enviar datos: Header, body, query, ruta