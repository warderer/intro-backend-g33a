/* CONTROLADORES */
// Los controladores tienen la lógica de negocio de la aplicación.
// Se encargan de recibir las peticiones HTTP, procesarlas y responder y de validar los datos que se envían, manejar errores y resolver promesas.

// #1 Importar el modelo, en este caso Home.js
const ModelHomes = require('../models/Home')

// #2 Crear las funciones que van a ser llamadas por la vista (en este caso las rutas)

// CREATE
const createHome = (req, res) => {
  ModelHomes.create(req.body).then((home) => {
    res.status(201).json(home)
  }).catch((error) => {
    res.status(400).json(error.message)
  })
}

// READ

// UPDATE

// DELETE

module.exports = {
  createHome
}
