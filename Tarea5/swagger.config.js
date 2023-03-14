const port = process.env.PORT || 3000;
module.exports = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            "title": "API Tarea 5",
            "description": "Esta API permite al usuario administrar tareas a través de una base de datos en MongoDB. Como administrador de tareas, el usuario debe tener la capacidad de crear tareas, listar las tareas existentes, editar una tarea (modificar datos o su status), ver los detalles de una tarea o eliminar una tarea existente. ",
            "version": "1.0.0",
            "servers": ["http://localhost:" + port ]
        }
    },
    apis: ['src/rutas/*.js']
} 