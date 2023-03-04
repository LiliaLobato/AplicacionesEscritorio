const router = require('express').Router();

const rutasTareas = require('./noticias')

router.use('/noticias', rutasTareas);

module.exports = router