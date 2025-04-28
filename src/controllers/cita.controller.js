const citaService = require('../services/cita.service');

// 📌 Crear una nueva cita
const create = async (req, res) => {
    try {
        const nuevaCita = await citaService.create(req.body);
        res.status(201).json(nuevaCita);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

// 📌 Obtener todas las citas
const getAll = async (req, res) => {
    try {
        const citas = await citaService.getAll();
        res.status(200).json(citas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// 📌 Obtener una cita por ID
const getById = async (req, res) => {
    try {
        const cita = await citaService.getById(req.params.id);
        res.status(200).json(cita);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

// 📌 Actualizar una cita
const update = async (req, res) => {
    try {
        const citaActualizada = await citaService.update(req.params.id, req.body);
        res.status(200).json(citaActualizada);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

// 📌 Eliminar una cita
const remove = async (req, res) => {
    try {
        await citaService.remove(req.params.id);
        res.status(200).json({ mensaje: 'Cita eliminada correctamente.' });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
};
