const path = require('path');
const express = require ('express');
const rutas = require ('./rutas');
const rutas2 = require ('./src/rutas');

const app = express();
const port = 3000;

app.use('*/assets', express.static(path.join(__dirname, 'assets')));
app.use('',rutas2);
rutas(app);

app.listen(port, function(){
    console.log('app is running in port:' + port)
});

