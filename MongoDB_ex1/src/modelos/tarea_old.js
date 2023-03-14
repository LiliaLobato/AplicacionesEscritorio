function traerTareas(filtros){
    const tareas = [
        {titulo: "Tarea 1", estado: "nueva"},
        {titulo: "Tarea 2", estado: "en progreso"},
        {titulo: "Tarea 3", estado: "terminada"},
        {titulo: "Tarea 4", estado: "nueva"},
        {titulo: "Tarea 5", estado: "terminada"},
        {titulo: "Tarea 6", estado: "terminada"},
    ]

    return new Promise ((result, reject) => {
        setTimeout(() => {
            result(tareas);
        },1000);
    })
}

function traerTarea(id){
    return id;
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