const Mascota = require('../models/mascota.model');

const create = async (data) => {
    const mascota = new Mascota(data);
    await mascota.save();
    return mascota;
};

const getAll = async () => {
    return await Mascota.find();
};

const getById = async (id) => {
    const mascota = await Mascota.findById(id);
    if (!mascota) {
        throw new Error('Mascota no encontrada');
    }
    return mascota;
};

const update = async (id, data) => {
    const mascota = await Mascota.findByIdAndUpdate(id, data, { new: true });
    if (!mascota) {
        throw new Error('Mascota no encontrada');
    }
    return mascota;
};

const remove = async (id) => {
    const mascota = await Mascota.findByIdAndDelete(id);
    if (!mascota) {
        throw new Error('Mascota no encontrada');
    }
    return mascota;
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
}
