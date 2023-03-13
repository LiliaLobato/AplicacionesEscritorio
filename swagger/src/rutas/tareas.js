const express = require('express')
const {  actualizar, crear, listar, ver } = require('../controladores/tareas')

const router = express.Router()

/**
 * @swagger
 * /tareas:
 *  post:
 *   description: crear una nueva tarea
 *   parameters: 
 *     - in: body
 *       name: titulo
 *       description: Titulo de la tarea
 *       schema: 
 *         type: string
 *   responses:
 *     200:
 *       description: Lista de tareas del usuario
 */
router.post('',express.json(),crear)

router.put('/:id',actualizar)

router.get('', listar)

router.get('/:id',ver)


module.exports = router


//Modos para enviar datos: Header, body, query, ruta

//Variables de entorno
//Template engine, plantilla de HTML a la que podemos pasarle contenido dinámico
//Express handlebars, hay que instalarla npm install express-handlebars


