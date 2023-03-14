const express = require ('express');
const rutas = require ('./rutas');
const rutasAPI = require ('./src/rutas');
const mongoose = require('mongoose')
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const swaggerConf = require('./swagger.config')

const app = express();
const port = process.env.PORT || 3000;

const swaggerDocs = swaggerJsDoc(swaggerConf)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('',rutasAPI);
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


