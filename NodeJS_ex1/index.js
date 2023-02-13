
const version = require('./animal')
const express = require('express')

const app = express();
const port = 3000;

app.get('/', function(req, res) {
    console.log('hola mundo')
    console.log(version)
    res.send('API works')
});

app.get('/test', function(req, res){
    res.send('Testing :D')
})

//http://localhost:3000/usuarios?test=4&tortilla=true
//parametros de query
app.get('/usuarios', function(req, res){
    console.log(req.query)
    console.log(req.query.test)
    res.send(req.query)
})

app.get('/*', function(req, res){
    res.status(404).send('Página no encontrada')
})

app.listen(port, function(){
    console.log('app is running in port:' + port)
});


