class Itens {
    constructor(i) {
        this.id = i.id
        this.pedidoId = i.pedidoId
        this.cardapioId = i.cardapioId
        this.quantidade = i.quantidade
    }

    create() {
        return `INSERT INTO itens VALUE(default, ${this.pedidoId}, ${this.cardapioId}, ${this.quantidade})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM itens`
        else
            return `SELECT * FROM itens WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE itens SET quantidade = '${this.quantidade}'`
    }

    delete() {
        return `DELETE FROM itens WHERE id = ${this.id}`
    }
}

module.exports = Itens 