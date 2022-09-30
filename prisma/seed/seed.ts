import { PrismaClient } from "@prisma/client";
import { clientes } from "./data/Clientes";

const prisma = new PrismaClient();

async function main() {
    await prisma.cliente.deleteMany();
    console.log('Deleted records in category table...');

    console.log('Start sseeding...');

    await prisma.cliente.createMany({
        data: clientes
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
