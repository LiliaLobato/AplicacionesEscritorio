function middleware(req,res,next){
    console.log('pasé por aquí')
    
    if(req.query.token === '123'){
       req.usuario = "David"
       next()
         
    }
    else{
       res.status(401).send("Usuario no autentificado")
    }
    

}

module.exports = middleware