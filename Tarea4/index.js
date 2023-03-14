const express = require ('express');
const rutas = require ('./rutas');
const path = require('path');
const rutas2 = require ('./src/rutas');
require('dotenv').config();

const {engine} = require('express-handlebars')

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('*/assets', express.static(path.join(__dirname, 'assets')));

app.use('',rutas2);
rutas(app);

app.listen(port, function(){
    console.log('app is running in port:' + port)
});


