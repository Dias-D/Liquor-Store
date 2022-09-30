import { PrismaClient } from "@prisma/client";
import { catalogos } from "./data/Catalogos";
import { clientes } from "./data/Clientes";

const prisma = new PrismaClient();

async function main() {
    console.log('Deleted records in tables...');

    await prisma.cliente.deleteMany();
    await prisma.catalogo.deleteMany();

    console.log('Start seeding...');

    await prisma.cliente.createMany({
        data: clientes
    });

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
