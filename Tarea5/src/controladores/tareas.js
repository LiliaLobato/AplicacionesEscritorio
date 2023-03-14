const modelo = require('./../modelos/tarea');

function traerTareas(req, res){
    modelo.find().then(
        response =>{
            console.log('Respuesta: ', response)
            res.status(200).send(response)
        }
    ).catch(
        error=>{
            res.status(400).send("Algo salió mal")
        }
    );
}

function traerTarea(req, res){
    const tarea = modelo.traerTareas(res.params.id);
    res.send('detalles de la tarea' + tarea);
}

function crearTarea(req, res){
    console.log(req.body)
    res.send('tarea creada 2');
}

function actualizarTarea(req, res){
    res.send('tarea actualizada correctamente');
}


module.exports = {  
    traerTareas,
    traerTarea,
    crearTarea,
    actualizarTarea
}