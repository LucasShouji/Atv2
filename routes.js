const express = require('express');
const router = express.Router();
const EnderecoController = require('./controllers/EnderecoController');


router.post('/endereco/:cep', EnderecoController.buscarESalvarEndereco);

module.exports = router;
