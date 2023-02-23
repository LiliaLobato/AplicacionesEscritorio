const path = require('path');
const express = require('express');
const auth = require('./src/middleware').auth;

function cargarHome(req,res){
    console.log('api works for user ' );
    res.sendFile(path.join(__dirname, 'src','views', 'home.html')); 
}

module.exports = function(app){
    
    app.get('/', auth, cargarHome);

    app.get('/*', function(req, res){
        res.status(404).send('Página no encontrada')
    })

}

