const express = require('express');

const router = express.Router();

const { registrarUsuario } = require('../consultas/consultas');
const { checkCredentialsExists } = require('../middlewares/middleware');

router.get('/', (req, res) => {
    res.send('Hello World');
})


router.post('/usuarios', checkCredentialsExists, async(req, res) => {
    try {
        const usuario = req.body;
        await registrarUsuario(usuario);
        res.send('Usuario registrado');
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router