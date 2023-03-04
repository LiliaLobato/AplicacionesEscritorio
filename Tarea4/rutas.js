const path = require('path');

function cargarHome(req,res, test){
    const apiKey = req.query.paginado == 'false' ? false : true;
    const usuario = req.usuario
    console.log('News Api key exists');
    res.render('home', {nombre: usuario})
}

module.exports = function(app){
    
    app.get('/', cargarHome);

    app.get('/*', function(req, res){
        res.status(404).send('Página no encontrada')
    })

}


