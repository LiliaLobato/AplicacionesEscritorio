const express = require ('express');
const rutas = require ('./rutas');

const app = express();
rutas(app);
const port = 3000;

app.listen(port, function(){
    console.log('app is running in port:' + port)
});


