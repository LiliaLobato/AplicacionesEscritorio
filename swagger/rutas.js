const path = require('path')
const  auth  = require('./src/middlewares').auth

function cargarHome(req, res){
    //const paginado = req.query.paginado == 'false' ? false:true
    console.log('api works')
    
    //res.sendFile(path.join(__dirname+ 'src','views','/index.html'))
    res.render('home',{
        nombre : 'Juan Perez'
    })
}



module.exports = function(app){

    

    app.get('/', auth, cargarHome)
    
    //Parametros de query y parametros de ruta
    /*app.get('/usuarios',middleware,function(req,res){
        console.log(req.query)
        res.send("Lista de usuarios para" + req.usuario + req.query)
    })*/
    
    app.get('*', function(req,res){
        res.status(404).send("Pagina no encontrada")
    })//Nunca poner el comodin antes, primero poner todos los endpoints
}





