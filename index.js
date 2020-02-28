const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

//Puerto de la app
const port = process.env.port || 4000;

//Conectar a la base de datos
conectarDB();

//Habilita cors
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true }))

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//arranca la app
app.listen(port, '0.0.0.0', () => {
  console.log(`el servidor esta funcionando en el puerto ${port}`);
} )
