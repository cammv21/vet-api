// Importamos el modelo de Veterinario
const Veterinario = require('../models/veterinario.model');

// 📌 Crear un nuevo veterinario
const create = async (data) => {
    // Crear una nueva instancia del modelo Veterinario con los datos recibidos
    const veterinario = new Veterinario(data);
    // Guardar el nuevo veterinario en la base de datos
    await veterinario.save();
    // Retornar el veterinario creado
    return veterinario;
}

// 📌 Obtener todos los veterinarios
const getAll = async () => {
    // Buscar y retornar todos los veterinarios en la base de datos
    return await Veterinario.find();
}

// 📌 Obtener un veterinario por su ID
const getById = async (id) => {
    // Buscar un veterinario específico por su ID
    const veterinario = await Veterinario.findById(id);

    // Si no se encuentra el veterinario, lanzar un error
    if (!veterinario) {
        throw new Error('Veterinario no encontrado');
    }

    // Retornar el veterinario encontrado
    return veterinario;
}

// 📌 Actualizar un veterinario
const update = async (id, data) => {
    // Buscar un veterinario por su ID y actualizarlo con los nuevos datos
    // `{ new: true }` hace que se retorne el documento actualizado
    const veterinario = await Veterinario.findByIdAndUpdate(id, data, { new: true });

    // Si no se encuentra el veterinario, lanzar un error
    if (!veterinario) {
        throw new Error('Veterinario no encontrado');
    }

    // Retornar el veterinario actualizado
    return veterinario;
}

// 📌 Eliminar un veterinario
const remove = async (id) => {
    // Buscar un veterinario por su ID y eliminarlo de la base de datos
    const veterinario = await Veterinario.findByIdAndDelete(id);

    // Si no se encuentra el veterinario, lanzar un error
    if (!veterinario) {
        throw new Error('Veterinario no encontrado');
    }

    // Retornar el veterinario eliminado
    return veterinario;
}

// 📦 Exportamos todas las funciones para ser utilizadas en otros módulos (por ejemplo, en controllers)
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
}

