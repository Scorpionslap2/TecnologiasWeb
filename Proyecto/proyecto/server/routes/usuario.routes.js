const express = require('express');
const router = express.Router();

const usuario = require('../controllers/usuario.controller');

router.get('/', usuario.getUsuarios);
router.post('/', usuario.postUsuarios);
router.get('/:id', usuario.getUsuario);
router.put('/:id', usuario.putUsuario);
router.delete('/:id', usuario.deleteUsuario);



module.exports = router;