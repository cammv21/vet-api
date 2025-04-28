// Importamos el modelo de Mascota
const Mascota = require('../models/mascota.model');

// 📌 Crear una nueva mascota
const create = async (data) => {
    // Crear una instancia nueva de Mascota con los datos recibidos
    const mascota = new Mascota(data);
    // Guardar la mascota en la base de datos
    await mascota.save();
    // Retornar la mascota creada
    return mascota;
};

// 📌 Obtener todas las mascotas
const getAll = async () => {
    // Buscar y retornar todas las mascotas en la base de datos
    return await Mascota.find();
};

// 📌 Obtener una mascota por su ID
const getById = async (id) => {
    // Buscar una mascota específica por su ID
    const mascota = await Mascota.findById(id);

    // Si no se encuentra, lanzar un error
    if (!mascota) {
        throw new Error('Mascota no encontrada');
    }

    // Retornar la mascota encontrada
    return mascota;
};

// 📌 Actualizar una mascota
const update = async (id, data) => {
    // Buscar una mascota por su ID y actualizarla con los nuevos datos
    // `{ new: true }` hace que se retorne el documento actualizado
    const mascota = await Mascota.findByIdAndUpdate(id, data, { new: true });

    // Si no se encuentra la mascota, lanzar un error
    if (!mascota) {
        throw new Error('Mascota no encontrada');
    }

    // Retornar la mascota actualizada
    return mascota;
};

// 📌 Eliminar una mascota
const remove = async (id) => {
    // Buscar una mascota por su ID y eliminarla de la base de datos
    const mascota = await Mascota.findByIdAndDelete(id);

    // Si no se encuentra, lanzar un error
    if (!mascota) {
        throw new Error('Mascota no encontrada');
    }

    // Retornar la mascota eliminada (opcionalmente podrías solo retornar un mensaje)
    return mascota;
};

// Exportamos todas las funciones para que puedan ser usadas en otros archivos (como controllers)
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
}

