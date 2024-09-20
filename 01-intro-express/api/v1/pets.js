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

// router.get('/api/v1/pets', (req, res) => {
//     res.json(petList)
// })

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

/* QUERY */
// Son similares a los PARAMS, pero se suelen usar para filtrar o buscar información. Sobre todo cuando ocupamos mandar más de un dato.
// Las QUERY son abiertas, no definidmos los nombres de antemano. La responsabilidad del BACKEND es SOLO tomar en cuenta las queries que le interesen.
// Ejemplo: /api/v1/pets?age=3&type=dog
router.get('/api/v1/pets', (req, res) => {
    // El objeto que contiene las query es: req.query. Es un objeto que contiene todas las queries que se mandaron en la petición por el usuario.
    console.log(req.query)

    const { age, type } = req.query

    const filteredPets = petList.pets.filter(pet =>
        type && age ? pet.type === type && pet.age === parseInt(age) :
        type ? pet.type === type :
        age ? pet.age === parseInt(age) : true
    )

    res.json(filteredPets)
})

module.exports = router