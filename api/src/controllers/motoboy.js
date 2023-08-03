const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const motoboys = await prisma.motoboy.findMany();
    return res.json(motoboys);
}

const create = async (req, res) => {
    const data = req.body;
    const motoboy = await prisma.motoboy.create({
        data: data
    });
    return res.status(201).json(motoboy).end();
}

module.exports = {
    read,
    create
};