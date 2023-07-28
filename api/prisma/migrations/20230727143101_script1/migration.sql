DROP DATABASE IF EXISTS restaurante;
CREATE DATABASE restaurante;
USE restaurante;
-- CreateTable
CREATE TABLE `cardapio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produto` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Motoboy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `placa` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `enderecoCep` VARCHAR(191) NOT NULL,
    `enderecoNumero` VARCHAR(191) NOT NULL,
    `enderecoComplemento` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Cliente_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clienteId` INTEGER NOT NULL,
    `motoboyId` INTEGER NOT NULL,
    `dataPedido` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataCozinha` DATETIME(3) NULL,
    `dataEntrega` DATETIME(3) NULL,
    `valorTotal` DOUBLE NOT NULL,
    `ValorEntrega` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Itens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedidoId` INTEGER NOT NULL,
    `cardapioId` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pedido` ADD CONSTRAINT `pedido_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedido` ADD CONSTRAINT `pedido_motoboyId_fkey` FOREIGN KEY (`motoboyId`) REFERENCES `Motoboy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itens` ADD CONSTRAINT `Itens_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itens` ADD CONSTRAINT `Itens_cardapioId_fkey` FOREIGN KEY (`cardapioId`) REFERENCES `cardapio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

insert into cardapio values
("", "brisadeiro", "Um delicioso brisadeiro que ira te fazer viajar", 10),
("", "X-ratão", "Uma carne deliciosa de rato", 50 ),
("", "Corinthians", "Carne de gavião das águias das montanhas", 40);

insert into motoboy values
("", "jeguelson nunes", "FJS-493", "fds"),
("", "indio da silva", "ODS-392", "krl"),
("", "kevin comer", "DAP-350", "prr");

insert into cliente values
("", "kevin sentar", "Rua das Ruas", "19 99985-2372", "1392-392", "543", ""),
("", "jacinto aquino", "Beco sem saida", "19 99768-9694", "4033-504", "543", ""),
("", "jair mendes", "Rua laureta gauna", "19 99746-7493", "1302-680", "92", "");

insert int pedido values
("", "", "", DATETIME, )
