const con = require('../DAO/connect')
const Pedido = require('../models/pedido')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new Pedido(lista[i])
    return lista
}

const cadastrar = (req, res) => {
    con.query(new Pedido(req.body).create(), (err, result) => {
        if (err == null)
            res.redirect('/')
        else
            res.status(500).send(err)

    })
}

const listar = (req, res) => {
    let pedido = new Pedido(req.params)
    con.query(pedido.listar(), (err, result) => {
        if (err == null) {
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let pedido = new Pedido(req.body)
    con.query(pedido.alterar(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    con.query(new Pedido(req.params).delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.redirect('/')
        else
            res.status(500).send(err)
    })
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
}