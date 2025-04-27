const mongoose = require('mongoose');

const MascotaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    especie: {
        type: String,
        required: true,
    },
    raza: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
        min: [0, 'La edad no puede ser negativa'],
    },
    peso: {
        type: Number,
        required: true,
        min: [0, 'El peso no puede ser negativo'],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Mascota', MascotaSchema);