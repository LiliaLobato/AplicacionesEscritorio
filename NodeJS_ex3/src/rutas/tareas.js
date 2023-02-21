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
    res.send('lista de tareas');
});

router.get('/:id', function(req, res){
    const id = res.params.id;
    res.send('detalles de la tarea' + id);
});


module.exports = router;