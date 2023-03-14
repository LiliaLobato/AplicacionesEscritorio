const {Schema, model} = require('mongoose')

const tarea = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    status: {type: String, default: 'new'}
});

module.exports = model("Tareas",tarea);

