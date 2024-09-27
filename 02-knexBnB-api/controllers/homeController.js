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
const findAllHomes = (req, res) => {
  ModelHomes.findAll().then((homes) => {
    res.status(200).json(homes)
  }).catch((error) => {
    res.status(400).json(error.message)
  })
}

const findOneHome = (req, res) => {
  ModelHomes.findOne(req.params.idHome).then((home) => {
    res.status(200).json(home)
  }).catch((error) => {
    res.status(400).json(error.message)
  })
}

// UPDATE
const updateOneHome = (req, res) => {
  ModelHomes.update(req.params.idHome, req.body).then((home) => {
    res.status(200).json(home)
  }).catch((error) => {
    res.status(400).json(error.message)
  })
}

// DELETE
const softDeleteOneHome = (req, res) => {
  ModelHomes.softDelete(req.params.idHome).then(() => {
    res.status(204).json()
  }).catch((error) => {
    res.status(400).json(error.message)
  })
}

const destroyOneHome = (req, res) => {
  ModelHomes.destroy(req.params.idHome).then(() => {
    res.status(204).json()
  }).catch((error) => {
    res.status(400).json(error.message)
  })
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome,
  softDeleteOneHome,
  destroyOneHome
}
