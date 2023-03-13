
const router = require('express').Router()
const rutasTarea = require('./tareas')
const rutasUsurio = require('./usuarios')
const { auth } = require('./../middlewares')


router.use('',auth)//La usamos para ambas rutas
router.use('/tareas', rutasTarea)
router.use('/usuarios',rutasUsurio)

module.exports = router;


