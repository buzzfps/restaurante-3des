const express = require('express');

const router = express.Router();

const motoboy = require('./controllers/motoboy');
const cliente = require('./controllers/cliente');
const cardapio = require('./controllers/cardapio');
const pedido = require('./controllers/pedido');
const itens = require('./controllers/itens');

router.get('/', (req, res) => { return res.json("API Restaurante respondendo") });

router.post('/motoboy', motoboy.create);
router.get('/motoboy', motoboy.read);
router.get('/motoboy/:id', motoboy.read);
router.put('/motoboy', motoboy.update);
router.delete('/motoboy/:id', motoboy.del);

router.post('/cliente', cliente.create);
router.get('/cliente', cliente.read);
router.get('/cliente/:id', cliente.read);
router.put('/cliente', cliente.update);
router.delete('/cliente/:id', cliente.del);

router.post('/cardapio', cardapio.create);
router.get('/cardapio', cardapio.read);
router.get('/cardapio/:id', cardapio.read);
router.put('/cardapio', cardapio.update);
router.delete('/cardapio/:id', cardapio.del);

router.post('/pedido', pedido.create);
router.get('/pedido', pedido.read);
router.get('/pedido/cozinha', pedido.readCozinha);
router.get('/pedido/entrega', pedido.readEntrega);
router.get('/pedido/hoje', pedido.readHoje);
router.get('/pedido/:id', pedido.read);
router.put('/pedido', pedido.update);
router.put('/pedido/cozinha', pedido.concluirCozinha);
router.delete('/pedido/:id', pedido.del);

router.post('/itens', itens.create);
router.get('/itens', itens.read);
router.get('/itens/:id', itens.read);
router.put('/itens', itens.update);
router.delete('/itens/:id', itens.del);

module.exports = router;