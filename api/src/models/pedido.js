class Pedido {
    constructor(i) {
        this.id = i.id
        this.clienteId = i.clienteId
        this.motoboyId = i.motoboyId
        this.dataPedido = i.dataPedido
        this.dataCozinha = i.dataCozinha
        this.dataEntrega = i.dataEntrega
        this.valorTotal = i.valorTotal
        this.valorEntrega = i.valorEntrega
    }

    create() {
        return `INSERT INTO pedido VALUE(default, ${this.clienteId}, ${this.motoboyId}, ${this.dataPedido}, ${this.dataCozinha}, ${this.dataEntrega}, ${this.valorTotal}, ${this.valorEntrega},)`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM pedido`
        else
            return `SELECT * FROM pedido WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM pedido WHERE id = ${this.id}`
    }
}

module.exports = Pedido 