const mascotaService = require('../services/mascota.service');

const create = async (req, res) => {
    try {
        const mascota = await mascotaService.create(req.body);
        res.status(201).json({
            message: 'Mascota creada exitosamente',
            mascota: mascota,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const mascotas = await mascotaService.getAll();
        res.status(200).json(mascotas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const mascota = await mascotaService.getById(req.params.id);
        res.status(200).json(mascota);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const mascota = await mascotaService.update(req.params.id, req.body);
        res.status(200).json(mascota);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        const mascota = await mascotaService.remove(req.params.id);
        res.status(200).json(mascota);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
}