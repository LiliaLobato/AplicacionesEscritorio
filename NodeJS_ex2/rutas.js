const path = require('path');
const express = require('express');

function cargarHome(req,res, test){
    const paginado = req.query.paginado == 'false' ? false : true;
    const usuario = req.usuario
    console.log('api works for user ' + usuario);
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 
}

function middleware(req, res, next){
    const auth = req.query.token === '123';
    console.log('pasé por aqui');

    if (auth) {
        req.usuario = 'Lilia';
        next(); // necesaria para recibir la respuesta 
    } else {
        res.status(401).send('Credencial inválida');
    }
}

module.exports = function(app){
    
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/', middleware, cargarHome);

    app.get('/test', function(req, res){
        res.send('Testing :D')
    })

    //http://localhost:3000/usuarios?test=4&token=123
    //parametros de query
    app.get('/usuarios', middleware, function(req, res){
        console.log(req.query)
        console.log(req.query.test)
        res.send('Lista de usuarios para ' + req.usuario)
    })

    app.get('/*', function(req, res){
        res.status(404).send('Página no encontrada')
    })

}


