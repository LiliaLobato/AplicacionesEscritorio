const router = require('express').Router();
const auth = require('./../middleware').auth;

const rutasTareas = require('./tareas')
const rutasUsuarios = require('./usuarios')

router.use('', auth);
router.use('/tareas', rutasTareas);
router.use('/usuarios', rutasUsuarios);

module.exports = router