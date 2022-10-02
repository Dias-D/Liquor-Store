import { PrismaClient } from "@prisma/client";
import { clientes } from "./data/Clientes";
import { produtos } from "./data/Produtos";
import { vendas } from "./data/Vendas";

const prisma = new PrismaClient();

async function main() {
    console.log('Deleted records in tables...');

    await prisma.cliente.deleteMany();
    await prisma.produto.deleteMany();

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

    await prisma.produto.createMany({
        data: produtos
    });

    await Promise.all(
        vendas.map(async (venda) => {
            await prisma.venda.create({
                data: {
                    id: venda.id,
                    IdCliente: venda.IdCliente,
                    Data: new Date(venda.Data)
                }
            });

            venda.Itens.map(async (item) => {
                await prisma.item.createMany({
                    data: {
                        IdVenda: venda.id,
                        IdProduto: item.id,
                        PrecoUnitario: item.PrecoUnitario,
                        Quantidade: item.Quantidade
                    }
                });
            });
        })
    );

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
