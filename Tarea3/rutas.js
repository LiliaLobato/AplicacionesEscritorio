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
        res.status(404).render('error', 
            {header: 'Not Found',
             title: "Not Found",
             error: "(404) Not Found",
             info: "The requested URL was not found on this server."
            }
        );
    })

}

