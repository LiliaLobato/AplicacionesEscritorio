const modelo = require('./../modelos/noticia');

function traerTareas(req, res){
    const filtros = req.query.text;
    modelo.traerTareas(filtros).then(
        noticias => {
            res.render('noticias', {noticias: noticias});
        }
    ).catch(
        error => {
            res.status(400).send('Algo salió mal');
        }
    );
}

function traerTarea(req, res){
    const noticia = modelo.traerTareas(res.params.id);
    res.send('detalles de la noticia' + noticia);
}

function crearTarea(req, res){
    console.log(req.body)
    res.send('noticia creada 2');
}

function actualizarTarea(req, res){
    res.send('noticia actualizada correctamente');
}


module.exports = {  
    traerTareas,
    traerTarea,
    crearTarea,
    actualizarTarea
}