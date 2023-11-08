const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
    console.log("funciona porfa xd")
};

usuarioCtrl.postUsuarios = async(req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    console.log(usuario);
    res.json({
        'status' : 'Empleado guardado'
    });
};

usuarioCtrl.getUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
  };

usuarioCtrl.putUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        correo: req.body.correo,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        rut: req.body.rut,
        clave: req.body.clave,
        telefono: req.body.telefono
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario editado'});
  };

usuarioCtrl.deleteUsuario = async (req, res) => {
    await Usuario.findOneAndDelete(req.params.id);
    res.json({status: 'Usuario eliminado'});
  };

module.exports = usuarioCtrl; 