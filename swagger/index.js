const express = require('express')
//Mi archivo index es el entry point por defecto de node
//Un modulo de node es un archivo o carpeta que está separado
//const version  = require("./animal")
const rutas = require('./rutas')
const routes = require('./src/rutas')
const path = require('path')
const mongoose = require('mongoose')
require( 'dotenv' ).config()
//console.log(version)//Si hay 2 modulos con el mismo nombre se trae el archivo antes que la carpeta

//Otro error de diseño da pie a una dependencia circular, esto se puede solucionar con un tercer modulo que no requiere ni A ni B que son 
//los modulos dependientes 

const { engine } = require('express-handlebars')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const swaggerConf = require('./swagger.config')


const app = express()

const mongoUrl = process.env.MONGO_URL;

console.log(mongoUrl)

app.engine('handlebars', engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}))
app.set('view engine', 'handlebars')
app.set('views', './src/views')
//localhost 127.0.0.1
//también tenemos un puerto, node por defecto utiliza el puerto 3000

const port = process.env.PORT || 3000; //Cuando no está disponible utilizaremos variables de entorno

app.use('*/assets',express.static(path.join(__dirname, 'assets')))

const swaggerDocs = swaggerJsDoc(swaggerConf)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('',routes)
rutas(app);

mongoose.connect(mongoUrl)
  .then(()=>{
    console.log('Se conectó correctamente a la base de datos');
  app.listen(port,function(){
      console.log('app is running in port: ' + port)
  })
}
    
  ).catch(err=>{
    console.log("No se pudo conectar a la base de datos", err)
  });


/*app.get('/', function(req,res){
    console.log('API works')
    res.send("api works")
})

//Parametros de query y parametros de ruta
app.get('/usuarios',function(req,res){
    console.log(req.query)
    res.send(req.query)
})

app.get('*', function(req,res){
    res.status(404).send("Pagina no encontrada")
})//Nunca poner el comodin antes, primero poner todos los endpoints*/



//npm star es el único donde podemos omitir poner el run

//Un middleware es una función intermediaria 
//No ejecutar un next cunando sabemos que algo no se puede hacer 
