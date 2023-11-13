const express = require('express') //importamos express
const cors = require('cors')//middleware para evirtar problemas con el cors(asi acepta peticiones de cualquier sitio)
// creamos un objeto con la funcion express que contiene métodos
// para hacer peticiones e iniciar el servidor
const app = express() 
const port = 3000
require('dotenv').config();
// Configurar la conexión de mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);



app.use(cors())
app.use(express.json())//Middelware para que pueda obtener el body

const userRoutes= require("./routes/users") //Enlace con rutas
app.use('/users',userRoutes)

const catRoutes = require("./routes/cats")
app.use('/cats', catRoutes)

/*
// Lo mismo que arriba, escucha una solicitud GET
app.get("/", function(request, response) {
    const queryParams= request.query
    return response.send(`Hola ${queryParams.name} tienes ${queryParams.age} años`);
  });
  
  // Cuando llega una solicitud a /instructors/ALGO
  app.get("/ganador/:ganador", function(request, response) {
    // Vamos a capturar la parte "dinámica" de la URL, a la que llamamos "firstName". El nombre que damos a esta parte dinámica de la URL se convertirá en una clave en el objeto params, que existe en el objeto request.
  
    // ¡Enviemos de vuelta un texto con los datos que vinieron en la URL!
    return response.send(
      `El ganador del concurso es ${request.params.ganador}`
    );
  });
  */

  
  async function main() {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('Database connected');
  }
  main().catch((err) => console.log(err));

// Iniciamos el servidor
app.listen(process.env.PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${process.env.PORT}`);
});