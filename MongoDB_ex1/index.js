const express = require ('express');
const rutas = require ('./rutas');
const path = require('path');
const rutas2 = require ('./src/rutas');
const mongoose = require('mongoose')
require('dotenv').config();

const {engine} = require('express-handlebars')

const mongoURL = process.env.MONGO_URL;

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}));
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('*/assets', express.static(path.join(__dirname, 'assets')));

app.use('',rutas2);
rutas(app);

mongoose.connect(mongoURL)
    .then(()=>{
        console.log('Se conectó correctamente a la base de datos');
        app.listen(port,function(){
            console.log('app is running in port: ' + port)
            console.log('Mongo url: ' + mongoURL)
    })})
    .catch(err=>{
        console.log("No se pudo conectar a la base de datos", err)
    }
);


