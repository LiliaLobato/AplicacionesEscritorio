const express = require('express');
const controlador = require('./../controladores/tareas');
const router = express.Router()

router.post('', express.json(), controlador.crearTarea);

router.put('/:id', express.json(), controlador.actualizarTarea);

router.delete('/:id', controlador.eliminarTarea);

router.get('', controlador.traerTareas);

router.get('/:id', controlador.traerTarea);


module.exports = router;