const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    correo: {type: String, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    rut: {type: String, required: true},
    clave: {type: String, required: true},
    telefono: {type: String, required: true}
})

module.exports = mongoose.model('Usuario', UsuarioSchema);