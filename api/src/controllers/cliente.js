const con = require('../DAO/connect')
const Cliente = require('../models/cliente')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new Cliente(lista[i])
    return lista
}

const cadastrar = (req, res) => {
    con.query(new Cliente(req.body).create(), (err, result) => {
        if (err == null)
            res.redirect('/')
        else
            res.status(500).send(err)

    })
}

const listar = (req, res) => {
    let cliente = new Cliente(req.params)
    con.query(cliente.listar(), (err, result) => {
        if (err == null) {
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let cliente = new Cliente(req.body)
    con.query(cliente.alterar(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    con.query(new Cliente(req.params).delete(), (err, result) => {
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