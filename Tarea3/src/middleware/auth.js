const path = require('path');

function middleware(req, res, next){
    const auth = req.query.token === '706937';
    console.log('Passing through middleware');

    if (auth) {
        req.usuario = 'Lilia Lobato';
        next(); // necesaria para recibir la respuesta 
    } else {
        res.status(401).sendFile(path.join(__dirname, '..','views', 'notAuth.html'));
    }
}

module.exports = middleware;