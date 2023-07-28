const express = require('express')
const cors = require('cors')

const routerCardapio = require('./src/routes/cardapio')
const routerCliente = require('./src/routes/cardapio')
const routerItens = require('./src/routes/cardapio')
const routerMotoboy = require('./src/routes/cardapio')
const routerPedido = require('./src/routes/cardapio')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', routerCardapio)
app.use('/', routerCliente)
app.use('/', routerItens)
app.use('/', routerMotoboy)
app.use('/', routerPedido)

app.listen(3000, () => {
    console.log("Rodando")
})