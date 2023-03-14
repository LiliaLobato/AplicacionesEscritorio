const path = require('path');

function middleware(req, res, next){
    const auth = req.query.token === '706937';
    console.log('Passing through middleware');

    if (auth) {
        req.usuario = 'Lilia Lobato';
        next(); // necesaria para recibir la respuesta 
    } else {
        res.status(401).render('error', 
            {header: 'Not Authenticated',
             title: "Not Authenticated",
             error: "(401) Not Authenticated",
             info: "Freeze Punk! You are not authenticated! <br> Try using <a href=\"/?token=706937\" >706937</a> as the token."
            }
        );
    }
}

module.exports = middleware;