// #1 Llamar a la biblioteca de express (importarla)
const express = require('express')
const petsRoutes = require('./api/v1/pets') // Mando a llamar el archivo de rutas de pets

// Hago una variable para el puerto, si no hay un puerto definido en las variables de entorno, entonces el puerto será el 3000
const PORT = process.env.PORT || 3000

// #2a Crear una instancia de express
const app = express()

// #2b Configurar mi instancia de express
app.use(express.json()) // Le digo a express que voy a usar JSON en TODAS mis peticiones por defecto.

// #3 Definir las rutas de mi servidor
app.get('/', function (req, res) {
  res.send('Hola Mundo Nodemon!')
})

app.use(petsRoutes) // Le digo a express que use las rutas de pets

// #4 Levantar el servidor, para comenzar a escuchar peticiones en un puerto específico (en este caso el 3000)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🚀`)
})