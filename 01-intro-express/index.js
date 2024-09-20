// #1 Llamar a la biblioteca de express (importarla)
const express = require('express')

// #2a Crear una instancia de express
const app = express()

// #2b Configurar mi instancia de express
app.use(express.json()) // Le digo a express que voy a usar JSON en TODAS mis peticiones por defecto.

// #3 Definir las rutas de mi servidor
app.get('/', function (req, res) {
  res.send('Hello World')
})

// #4 Levantar el servidor, para comenzar a escuchar peticiones en un puerto específico (en este caso el 3000)
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000 🚀')
})