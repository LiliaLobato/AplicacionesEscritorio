// Define 2 instancias del objeto
// no son idependientes
/*
const perro = require('./animal');
const gato = require('./animal');
*/

// Define una clase y la usa
// el resultado son objetos independientes
const Animal = require('./animal')

const perro = new Animal;
const gato = new Animal;

gato.nombre = 'Gato'
perro.nombre = 'Perro'

console.log(perro.nombre)
console.log(gato.nombre)