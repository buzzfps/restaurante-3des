const con = require('../DAO/connect')
const Motoboy = require('../models/motoboy')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new Motoboy(lista[i])
    return lista
}

const cadastrar = (req, res) => {
    con.query(new Motoboy(req.body).create(), (err, result) => {
        if (err == null)
            res.redirect('/')
        else
            res.status(500).send(err)

    })
}

const listar = (req, res) => {
    let motoboy = new Motoboy(req.params)
    con.query(motoboy.listar(), (err, result) => {
        if (err == null) {
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let motoboy = new Motoboy(req.body)
    con.query(motoboy.alterar(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    con.query(new Motoboy(req.params).delete(), (err, result) => {
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