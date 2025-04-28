// Importamos los modelos de Mongoose
const Cita = require('../models/cita.model');
const Veterinario = require('../models/veterinario.model');
const Mascota = require('../models/mascota.model');

// 📌 Crear una nueva cita
const create = async ({ fecha, motivo, veterinario, mascota }) => {
    // Verificar si el veterinario existe
    const existeVeterinario = await Veterinario.findById(veterinario);
    // Verificar si la mascota existe
    const existeMascota = await Mascota.findById(mascota);

    // Si no existe el veterinario o la mascota, lanzamos un error
    if (!existeVeterinario || !existeMascota) {
        throw new Error('Veterinario o mascota no encontrado.');
    }

     // Crear un nuevo objeto de tipo Cita
    const nuevaCita = new Cita({ fecha, motivo, veterinario, mascota });
    // Guardar en la base de datos y retornar la cita guardada
    return await nuevaCita.save();
};

// 📌 Obtener todas las citas
const getAll = async () => {
    // Buscar todas las citas, y hacer populate para traer los datos del veterinario y la mascota
    return await Cita.find()
        .populate('veterinario', 'nombre especialidad')// Solo traemos los campos necesarios
        .populate('mascota', 'nombre especie raza');
};

// 📌 Obtener una cita por ID
const getById = async (id) => {
    
    // Buscar la cita por ID
    const cita = await Cita.findById(id)
        .populate('veterinario', 'nombre especialidad')
        .populate('mascota', 'nombre especie raza');

    // Si no se encuentra, lanzamos error
    if (!cita) {
        throw new Error('Cita no encontrada.');
    }

    // Retornamos la cita encontrada
    return cita;
};

// 📌 Actualizar una cita
const update = async (id, { fecha, motivo, veterinario, mascota }) => {
    
    // Buscar la cita que queremos actualizar
    const cita = await Cita.findById(id);
    if (!cita) {
        throw new Error('Cita no encontrada.');
    }

    // Si se quiere actualizar el veterinario, verificar que exista
    if (veterinario) {
        const existeVeterinario = await Veterinario.findById(veterinario);
        if (!existeVeterinario) {
            throw new Error('Veterinario no encontrado.');
        }
        cita.veterinario = veterinario;
    }

    // Si se quiere actualizar la mascota, verificar que exista
    if (mascota) {
        const existeMascota = await Mascota.findById(mascota);
        if (!existeMascota) {
            throw new Error('Mascota no encontrada.');
        }
        cita.mascota = mascota;
    }

    // Actualizar los demás campos si se proporcionan
    cita.fecha = fecha || cita.fecha;
    cita.motivo = motivo || cita.motivo;

    // Guardar y retornar la cita actualizada
    return await cita.save();
};

// 📌 Eliminar una cita
const remove = async (id) => {
    // Buscar la cita a eliminar
    const cita = await Cita.findById(id);
    if (!cita) {
        throw new Error('Cita no encontrada.');
    }
    // Eliminar la cita de la base de datos
    await cita.deleteOne();
};

// Exportar las funciones para poder usarlas en el controlador
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
};
