function middleware(req, res, next){
    const auth = req.query.token === '123';
    console.log('pasé por aqui');

    if (auth) {
        req.usuario = 'Lilia';
        next(); // necesaria para recibir la respuesta 
    } else {
        res.status(401).send('Credencial inválida');
    }
}

module.exports = middleware;