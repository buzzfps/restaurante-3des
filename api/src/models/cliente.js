class Cliente {
    constructor(i) {
        this.id = i.id
        this.cpf = i.cpf
        this.nome = i.nome
        this.endereco = i.endereco
        this.telefone = i.telefone
        this.enderecoCep = i.enderecoCep
        this.enderecoNumero = i.enderecoNumero
        this.enderecoComplmento = i.enderecoComplmento
    }

    create() {
        return `INSERT INTO cliente VALUE(default,'${this.cpf}','${this.nome}', ${this.endereco}', ${this.telefone}', ${this.enderecoCep}', ${this.enderecoNumero}', ${this.enderecoComplmento}',)`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM cliente`
        else
            return `SELECT * FROM cliente WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE cliente SET nome = '${this.nome}', endereco = '${this.endereco}', telefone = '${this.telefone}', enderecoCep = '${this.enderecoCep}', enderecoNumero = '${this.enderecoNumero}', enderecoComplemento = '${this.enderecoComplmento}',`
    }

    delete() {
        return `DELETE FROM cliente WHERE id = ${this.id}`
    }
}

module.exports = Cliente 