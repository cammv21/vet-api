const veterinarioService = require('../services/veterinario.service');

const create = async (req, res) => {
    try {
        const veterinario = await veterinarioService.create(req.body);
        res.status(201).json({
            message: 'Veterinario creado exitosamente',
            veterinario: veterinario,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const veterinarios = await veterinarioService.getAll();
        res.status(200).json(veterinarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const veterinario = await veterinarioService.getById(req.params.id);
        res.status(200).json(veterinario);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const veterinario = await veterinarioService.update(req.params.id, req.body);
        res.status(200).json(veterinario);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        const veterinario = await veterinarioService.remove(req.params.id);
        res.status(200).json(veterinario);
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
