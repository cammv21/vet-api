const express = require('express');
const router = express.Router();
const CitaController = require('../controllers/cita.controller');

router.post('/', CitaController.create);
router.get('/', CitaController.getAll);
router.get('/:id', CitaController.getById);
router.put('/:id', CitaController.update);
router.delete('/:id', CitaController.remove);

module.exports = router;
