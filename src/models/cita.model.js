const mongoose = require('mongoose');

const CitaSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
    },
    motivo: {
        type: String,
        required: true,
        trim: true,
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario', // Nombre del modelo relacionado
        required: true,
    },
    mascota: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mascota', // Nombre del modelo relacionado
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Cita', CitaSchema);
