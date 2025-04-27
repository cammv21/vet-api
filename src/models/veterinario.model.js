const mongoose = require('mongoose');

const VeterinarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    especialidad: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Veterinario', VeterinarioSchema);