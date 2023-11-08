const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    correo: String,
    nombre: String,
    apellido: String,
    rut: String,
    clave: String,
    telefono: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);