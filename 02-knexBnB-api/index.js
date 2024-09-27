// #1 Importar Express
const express = require('express')

const PORT = process.env.PORT || 3000

// #2 Crear una instancia de Express
const app = express()

// #3 Configurar express para que pueda recibir JSON
app.use(express.json())

// #4 Definir rutas de la aplicación

// #5 Levantar el servidor, escuchando un puerto, por ejemplo el 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`)
})
