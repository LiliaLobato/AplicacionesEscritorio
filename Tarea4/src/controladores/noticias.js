const modelo = require('./../modelos/noticia');

function traerNoticias(req, res){
    const filtros = req.query.filter;
    modelo.traerNoticias(filtros).then(
        noticias => {
            res.render('noticias', {noticias: noticias});
        }
    ).catch(
        error => {
            res.status(400).send('Algo salió mal');
        }
    );
}

module.exports = {  
    traerNoticias,
}