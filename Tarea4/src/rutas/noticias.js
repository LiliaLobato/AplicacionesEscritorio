const express = require('express');
const controlador = require('./../controladores/noticias');
const router = express.Router()

router.get('', controlador.traerNoticias);

module.exports = router;