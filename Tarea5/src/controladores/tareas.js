const modelo = require('./../modelos/tarea');

function traerTareas(req, res){
    modelo.find().then(
        response =>{
            console.log('Respuesta: ', response)
            res.status(200).send(response)
        }
    ).catch(
        error => {
            res.status(400).send("Algo salió mal: " + error)
        }
    );
}

function traerTarea(req, res){
    modelo.findById(req.params.id).then(
        response =>{
            console.log('Respuesta: ', response)
            res.status(200).send(response)
        }
    ).catch(
        error => {
            res.status(400).send("Algo salió mal: " + error)
        }
    );
}

function crearTarea(req, res){
    modelo.create(req.body).then(
        response =>{
            console.log('Respuesta: ', response)
            res.status(200).send(response)
        }
    ).catch(
        error => {
            res.status(400).send("Algo salió mal: " + error)
        }
    );
}

function actualizarTarea(req, res){
    modelo.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(
        response =>{
            console.log('Respuesta: ', response)
            res.status(200).send(response)
        }
    ).catch(
        error => {
            res.status(400).send("Algo salió mal: " + error)
        }
    );
}

function eliminarTarea(req, res){
    modelo.findByIdAndRemove(req.params.id).then(
        response =>{
            console.log('Respuesta: ', response)
            res.status(200).send(response)
        }
    ).catch(
        error => {
            res.status(400).send("Algo salió mal: " + error)
        }
    );
}


module.exports = {  
    traerTareas,
    traerTarea,
    crearTarea,
    actualizarTarea,
    eliminarTarea
}