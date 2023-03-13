//Schema permite definir la estrutura de un documento en una colección de nuestra base de datos
//Hay ciertas reglas de normalización que a veces se pueden saltar 

const {Schema, model} = require('mongoose')

const tarea = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    status: {type: String, default: 'new'}
});

module.exports = model("Tareas",tarea);

