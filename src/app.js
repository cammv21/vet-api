//-- Importar dependencias
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config(); // Cargar variables de entorno desde el archivo .env

const cors = require('cors');
const connectDB = require('./config/database');
const errorHandler = require('./middlewares/errorHandler');

const mascotaRoute = require('./routes/mascota.route');
const veterinarioRoute = require('./routes/veterinario.route');
const citaRoute = require('./routes/cita.route');

const port = process.env.PORT || 3000;

//-- Conectar a la base de datos
connectDB();

//-- Middlewares
app.use(cors({
    origin: 'http://localhost:4321', // Asegúrate de que esta URL coincida con la de tu frontend
}));

app.use(express.json()); // Permite trabajar con JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); // Soporta datos codificados en URL

//-- Rutas
app.use('/api/mascotas', mascotaRoute);
app.use('/api/veterinarios', veterinarioRoute);
app.use('/api/citas', citaRoute);


app.use(errorHandler); // Manejo de errores global


//-- Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});