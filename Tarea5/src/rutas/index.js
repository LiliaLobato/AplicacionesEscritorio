const router = require('express').Router();

const rutasTareas = require('./tareas')

router.use('/tareas', rutasTareas);

module.exports = router