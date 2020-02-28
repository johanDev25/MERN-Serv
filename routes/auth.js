//Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const auth = require('../middleware/auth')
const { check } = require('express-validator');


//Inicia sesion
//api/auth
router.post('/',
  authController.autenticarUsuario
);
//obtiene el usuario autenticado
router.get('/',
  auth,
  authController.usuarioAutenticado
)
module.exports = router;
