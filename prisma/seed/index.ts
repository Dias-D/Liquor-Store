import { PrismaClient } from "@prisma/client";
import { customers } from "./data/Customers";
import { products } from "./data/Products";
import { sales } from "./data/Sales";

const prisma = new PrismaClient();

async function main() {
    console.log('Deleted records in tables...');

    await prisma.customer.deleteMany();
    await prisma.product.deleteMany();
    await prisma.sale.deleteMany();
    await prisma.saleProduct.deleteMany();

    console.log('Start seeding...');

    await Promise.all(
        customers.map(async (customer) => {
            let array = new Array();
            array = customer.DataNascimento.split('-');

            await prisma.customer.create({
                data: {
                    id: customer.id,
                    name: customer.Nome,
                    birthDate: new Date(array[0], array[1], array[2])
                }
            });
        })
    );

    await Promise.all(
        products.map(async (product) => {
            await prisma.product.create({
                data: {
                    id: product.id,
                    branch: product.Marca,
                    classification: product.Classificacao,
                    name: product.Nome,
                    alcoholContent: product.TeorAlcoolico,
                    region: product.Regiao,
                    currentPrice: product.PrecoAtual,
                }
            });
        })
    );

    await Promise.all(
        sales.map(async (sale) => {
            await prisma.sale.create({
                data: {
                    id: sale.id,
                    IdCustomer: sale.IdCliente,
                    date: new Date(sale.Data)
                }
            });

            sale.Itens.map(async (item) => {
                await prisma.saleProduct.createMany({
                    data: {
                        idSale: sale.id,
                        idProduct: item.id,
                        unitPrice: item.PrecoUnitario,
                        amount: item.Quantidade
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
