const express = require('express');
const controlador = require('./../controladores/tareas');
const router = express.Router()

/**
 * @swagger
 *   components:
 *     schema:
 *       Tarea:
 *         type: object
 *         properties:
 *           titulo:
 *             type: string
 *             example: Mi tarea
 *           descripcion:
 *             type: string
 *             example: Esta es una tarea de prueba, eliminame por favor
 *           status:
 *             type: string
 *             example: en progreso
 *           fechaCreacion:
 *             type: date
 *             pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/
 *             example: "2023-03-14"
 *         required:
 *           - titulo
 *           - descripcion
 *       Id:
 *         type: string
 *         example: 640fead1062704aac96394da
 */

/**
 * @swagger
 * /tareas:
 *  post:
 *   summary: Crear una tarea
 *   description: Se crea una tarea nueva con los datos del objeto mandado. Si no se especifica la fecha de creación, por default se pone la fecha actual.
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schema/Tarea'
 *   responses:
 *     200:
 *       description: Retorna el objeto creado en la base de datos
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schema/Tarea'
 *     400:
 *       description: Algo sucedió mal
 */
router.post('', express.json(), controlador.crearTarea);

/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *   summary: Actualizar una tarea
 *   description: Dado un id y un objeto nuevo, se actualiza la tarea correspondiente.
 *   parameters: 
 *     - in: path
 *       name: id
 *       description: Id de la tarea
 *       schema: 
 *         $ref: '#/components/schema/Id'
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schema/Tarea'
 *   responses:
 *     200:
 *       description: Retorna el objeto actualizado en la base de datos
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schema/Tarea'
 *     400:
 *       description: Algo sucedió mal
 */
router.put('/:id', express.json(), controlador.actualizarTarea);

/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *   summary: Eliminar una tarea
 *   description: Dado un id, se elimina la tarea correspondiente.
 *   parameters: 
 *     - in: path
 *       name: id
 *       description: Id de la tarea
 *       schema: 
 *         $ref: '#/components/schema/Id'
 *   responses:
 *     200:
 *       description: Retorna el objeto elminado en la base de datos
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schema/Tarea'
 *     400:
 *       description: Algo sucedió mal
 */
router.delete('/:id', controlador.eliminarTarea);

/**
 * @swagger
 * /tareas:
 *  get:
 *   summary: Listar todas las tareas
 *   description: Se crea un listado con todas las tareas en la base de datos.
 *   responses:
 *     200:
 *       description: Retorna un arreglo de tareas de la base de datos
 *     400:
 *       description: Algo sucedió mal
 */
router.get('', controlador.traerTareas);

/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *   summary: Listar una tarea 
 *   description: Dado un id, se lista la tarea correspondiente.
 *   parameters: 
 *     - in: path
 *       name: id
 *       description: Id de la tarea
 *       schema: 
 *         $ref: '#/components/schema/Id'
 *   responses:
 *     200:
 *       description: Retorna el objeto de la base de datos
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schema/Tarea'
 *     400:
 *       description: Algo sucedió mal
 */
router.get('/:id', controlador.traerTarea);


module.exports = router;