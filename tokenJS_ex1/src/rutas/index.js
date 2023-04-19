const router = require('express').Router();
const auth = require('./../middleware').auth;

const rutasTareas = require('./tareas')
const rutasUsuarios = require('./usuarios')
const rutasAuth = require('./auth')

router.use('', rutasAuth);
router.use('/tareas', rutasTareas);
router.use('/usuarios', rutasUsuarios);

module.exports = router