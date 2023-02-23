const express = require('express')
const router = express.Router()

router.post('', express.json(), function(req, res){
    console.log(req.body)
    res.send('tarea creada 2');
});

router.put('/:id', function(req, res){
    res.send('tarea actualizada correctamente');
});

router.get('', function(req, res){
    const tareas = [
        {titulo: "Tarea 1", estado: "nueva"},
        {titulo: "Tarea 2", estado: "en progreso"},
        {titulo: "Tarea 3", estado: "terminada"},
        {titulo: "Tarea 4", estado: "nueva"},
        {titulo: "Tarea 5", estado: "terminada"},
    ]
    res.render('tareas', {tareas: tareas})

});

router.get('/:id', function(req, res){
    const id = res.params.id;
    res.send('detalles de la tarea' + id);
});


module.exports = router;