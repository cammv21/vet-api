const Veterinario = require('../models/veterinario.model');


const create = async (data) =>{
    const veterinario = new Veterinario(data);
    await veterinario.save();
    return veterinario
}

const getAll = async () => {
    return await Veterinario.find();
}

const getById = async (id) => {
    const veterinario = await Veterinario.findById(id);
    if (!veterinario) {
        throw new Error('Veterinario no encontrado');
    }
    return veterinario;
}

const update = async (id, data) => {
    const veterinario = await Veterinario.findByIdAndUpdate(id
        , data, { new: true });
    if (!veterinario) {
        throw new Error('Veterinario no encontrado');
    }
    return veterinario;
}

const remove = async (id) => {
    const veterinario = await Veterinario.findByIdAndDelete(id);
    if (!veterinario) {
        throw new Error('Veterinario no encontrado');
    }
    return veterinario;
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
}
