const {Schema, model} = require('mongoose')

const tarea = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    status: {type: String, default: 'nuevo'},
    fechaCreacion: {type: Date, default: new Date()}
});

module.exports = model("Tareas",tarea);

