const express = require('express');
const Router = express.Router();
const veterinarioController = require('../controllers/veterinario.controller');

Router.post('/', veterinarioController.create);
Router.get('/', veterinarioController.getAll);
Router.get('/:id', veterinarioController.getById);
Router.put('/:id', veterinarioController.update);
Router.delete('/:id', veterinarioController.remove);

module.exports = Router;
