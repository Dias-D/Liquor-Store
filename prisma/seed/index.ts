import { PrismaClient } from "@prisma/client";
import { catalogos } from "./data/Catalogos";
import { clientes } from "./data/Clientes";

const prisma = new PrismaClient();

async function main() {
    console.log('Deleted records in tables...');

    await prisma.cliente.deleteMany();
    await prisma.catalogo.deleteMany();

    console.log('Start seeding...');

    await Promise.all(
        clientes.map(async (cliente) => {
            let array = new Array();
            array = cliente.DataNascimento.split('-');

            await prisma.cliente.create({
                data: {
                    id: cliente.id,
                    Nome: cliente.Nome,
                    DataNascimento: new Date(array[0], array[1], array[2])
                }
            });
        })
    );

    await prisma.catalogo.createMany({
        data: catalogos
    });

    console.log('Finish seeds!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
