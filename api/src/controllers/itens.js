const con = require('../DAO/connect')
const Itens = require('../models/itens')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new Itens(lista[i])
    return lista
}

const cadastrar = (req, res) => {
    con.query(new Itens(req.body).create(), (err, result) => {
        if (err == null)
            res.redirect('/')
        else
            res.status(500).send(err)

    })
}

const listar = (req, res) => {
    let itens = new Itens(req.params)
    con.query(itens.listar(), (err, result) => {
        if (err == null) {
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let itens = new Itens(req.body)
    con.query(itens.alterar(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    con.query(new Itens(req.params).delete(), (err, result) => {
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