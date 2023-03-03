const path = require('path');
const auth = require('./src/middleware').auth;

function cargarHome(req,res, test){
    const paginado = req.query.paginado == 'false' ? false : true;
    const usuario = req.usuario
    console.log('api works for user ' + usuario);
    res.render('home', {nombre: usuario})
}

module.exports = function(app){
    
    app.get('/', auth, cargarHome);

    app.get('/*', function(req, res){
        res.status(404).send('Página no encontrada')
    })

}


