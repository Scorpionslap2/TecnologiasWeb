const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioCtrl.postUsuarios = function(){
    
}

module.exports = usuarioCtrl; 