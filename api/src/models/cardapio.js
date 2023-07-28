class Cardapio {
    constructor(i) {
        this.id = i.id
        this.produto = i.produto
        this.descricao = i.descricao
        this.preco = i.senha
    }

    create() {
        return `INSERT INTO cardapio VALUE(default,'${this.produto}','${this.descricao}'),${this.preco})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM cardapio`
        else
            return `SELECT * FROM cardapio WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE cardapio SET produto = '${this.produto}', descricao = '${this.descricao}', preco = ${this.preco}, WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM cardapio WHERE id = ${this.id}`
    }
}

module.exports = Cardapio 