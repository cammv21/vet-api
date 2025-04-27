const express = require('express');
const Router = express.Router();
const mascotaController = require('../controllers/mascota.controller');

Router.post('/', mascotaController.create);
Router.get('/', mascotaController.getAll);
Router.get('/:id', mascotaController.getById);
Router.put('/:id', mascotaController.update);
Router.delete('/:id', mascotaController.remove);

module.exports = Router;
