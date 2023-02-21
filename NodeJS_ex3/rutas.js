const path = require('path');
const express = require('express');
const auth = require('./src/middleware').auth;

function cargarHome(req,res, test){
    const paginado = req.query.paginado == 'false' ? false : true;
    const usuario = req.usuario
    console.log('api works for user ' + usuario);
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 
}

module.exports = function(app){
    
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/', auth, cargarHome);

    app.get('/test', function(req, res){
        res.send('Testing :D')
    })

    app.get('/*', function(req, res){
        res.status(404).send('Página no encontrada')
    })

}


