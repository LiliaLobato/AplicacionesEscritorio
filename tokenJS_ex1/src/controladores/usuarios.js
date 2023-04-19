const jwt = require('jsonwebtoken');
const { response } = require('express');
const modelo = require('../modelos/usuario');

function traerUsuarios(req, res){
    modelo.find().then(
        response =>{
            console.log('Respuesta: ', response)
            res.render('usuarios',{'usuarios':response})
        }
    ).catch(
        error=>{
            res.status(400).send("Algo salió mal")
        }
    );
}

function traerUsuario(req, res){
    const usuario = modelo.traerUsuarios(res.params.id);
    res.send('detalles de la usuario' + usuario);
}

function crearUsuario(req, res){
    console.log(req.body)
    res.send('usuario creada 2');
}

function actualizarUsuario(req, res){
    res.send('usuario actualizada correctamente');
}

function loginUsuario(req, res){
    res.send('usuario login');
}

function registroUsuario(req, res){
    usuario.crearUsuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        role: 'usuarioNormal',
        password: req.body.password
    }).then(response => {
        const token = jwt.sign({
            id: response._id,
            nombre: response.nombre,
            correo: response.correo,
            role: response.role
        }, 'holamundo')
        res.send({token});
    })
}

module.exports = {  
    traerUsuarios,
    traerUsuario,
    crearUsuario,
    actualizarUsuario,
    loginUsuario,
    registroUsuario
}