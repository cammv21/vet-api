//-- Importar dependencias
require('dotenv').config();

const express = require('express');
const cors = require('cors');


const app = express();

const port = process.env.PORT || 3000;

//-- Middlewares
app.use(cors());
app.use(express.json()); // Permite trabajar con JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); // Soporta datos codificados en URL

//-- Peticiones


//-- Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});