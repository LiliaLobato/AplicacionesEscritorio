const express = require('express');
const router = express.Router();
const controlador = require('../controladores/usuarios');

router.post('/login', controlador.loginUsuario);
router.post('/registro', controlador.registroUsuario);

module.exports = router;