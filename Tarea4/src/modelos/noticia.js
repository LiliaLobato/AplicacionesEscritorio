const axios = require('axios');

function traerTareas(filtros){
    console.log(filtros)
    return new Promise ((result, reject) => {
        axios.get('https://newsapi.org/v2/top-headlines?' +
        'q=' + filtros +
        '&apiKey=6b81cf2b9fb74f2a8803c915c4c277eb')
        .then(function (response) {
            // handle success
            console.log('success')
            console.log(response.data.articles);
            result(response.data.articles)
        })
        .catch(function (error) {
            console.log('error')
            // handle error
            console.log(error);
            reject('Error')
        });
    })
}

function traerTarea(id){
    return id;
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