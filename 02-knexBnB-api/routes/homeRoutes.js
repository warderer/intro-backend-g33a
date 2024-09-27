/* VISTA (RUTAS) */
// La vista es el archivo que se encarga de recibir las peticiones HTTP y enviarlas al controlador.

// #1 Importar Express
const express = require('express')

// #2 Importo el router de express
const router = express.Router()

// #3 Importar el controlador
const homeController = require('../controllers/homeController')

// #4 Definir las rutas
router.post('/homes', homeController.createHome)

// #5 Exportar el router
module.exports = router
