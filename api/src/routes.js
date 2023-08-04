const express = require('express');

const router = express.Router();

const motoboy = require('./controllers/motoboy');
const cliente = require('./controllers/cliente');
const cardapio = require('./controllers/cardapio');
const pedido = require('./controllers/pedido');

router.get('/', (req, res) => { return res.json("API Restaurante respondendo") });

router.post('/motoboy', motoboy.create);
router.get('/motoboy', motoboy.read);
router.put('/motoboy', motoboy.update);
router.delete('/motoboy/:id', motoboy.del);

router.post('/cliente', cliente.create);
router.get('/cliente', cliente.read);
router.get('/cliente/:id', cliente.read);
router.put('/cliente', cliente.update);
router.delete('/cliente/:id', cliente.del);

router.post('/cardapio', cardapio.create);
router.get('/cardapio', cardapio.read);
router.put('/cardapio', cardapio.update);
router.delete('/cardapio/:id', cardapio.del);

router.post('/pedido', pedido.create);
router.get('/pedido', pedido.read);
router.get('/pedido/cozinha', pedido.read);
router.get('/pedido/entrega', pedido.read);
router.get('/pedido/:id', pedido.read);
router.put('/pedido', pedido.update);
router.delete('/pedido/:id', pedido.del);

module.exports = router;