const express = require("express");
const router = express.Router();

const Cardapio = require("../controllers/cardapio");


router.post('/cardapio/cadastrar', Cardapio.cadastrar);
router.get('/cardapio/listar', Cardapio.listar);
router.put('/cardapio/alterar', Cardapio.alterar);
router.delete('/cardapio/excluir/:id', Cardapio.excluir);

module.exports = router;