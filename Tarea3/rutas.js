const path = require('path');
const express = require('express');
const auth = require('./src/middleware').auth;

function loadHome(req,res){
    console.log('Api works for alumn: ', req.usuario);
    res.sendFile(path.join(__dirname, 'src','views', 'home.html')); 
}

module.exports = function(app){
    
    app.get('/', auth, loadHome);

    app.get('/*', function(req, res){
        res.status(404).sendFile(path.join(__dirname, 'src','views', 'notFound.html'));
    })

}

