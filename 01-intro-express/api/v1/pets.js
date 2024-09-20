const express = require('express')
const router = express.Router() // El método Router() de express nos permite definir rutas en archivos separados

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Michi",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

router.get('/api/v1/pets', (req, res) => {
    res.json(petList)
})

/* PARAMS */
// Un Param es un valor que se envía en la URL de una petición HTTP
// Ejemplo: /api/v1/pets/1
// Un param es un valor dinámico.

router.get('/api/v1/pets/:petId', (req, res) => {
    console.log(req.params)
    const petId = req.params.petId
    const pet = petList.pets.find(pet => pet.id == petId)
    if (pet) {
        res.json(pet)
    } else {
        res.status(404).json({ error: 'Pet not found' })
    }
})


module.exports = router