const express = require('express');
const controlador = require('./../controladores/tareas');
const router = express.Router()

router.post('', express.json(), controlador.crearTarea);

router.put('/:id', controlador.actualizarTarea);

router.get('', controlador.traerTareas);

router.get('/:id', controlador.traerTarea);


module.exports = router;