import { Prisma, PrismaClient, Venda } from "@prisma/client";
import { createPaginator } from "prisma-pagination";

const prisma = new PrismaClient();

interface IRequest {
    endDate?: Date;
    nome?: string;
    page?: string | '1';
    perPage?: string | '20';
    startDate?: Date;
}

class VendaService {
    async findByData({ startDate, endDate, page, perPage }: IRequest) {
        const paginate = createPaginator({ perPage });
        const vendas = await paginate<Venda, Prisma.VendaFindManyArgs>(
            prisma.venda,
            {
                where: {
                    Data: {
                        gte: new Date(startDate),
                        lte: new Date(endDate)
                    }
                },
                include: {
                    Item: true
                }
            },
            {
                page
            }
        );

        if (!vendas) {
            return [];
        }

        return vendas;
    }

    async findByClienteNome({ nome, page, perPage }: IRequest) {
        const paginate = createPaginator({ perPage });
        const vendas = await paginate<Venda, Prisma.VendaFindManyArgs>(
            prisma.venda,
            {
                where: {
                    Cliente: {
                        Nome: {
                            contains: nome,
                            mode: 'insensitive'
                        }
                    }
                },
                include: {
                    Cliente: true
                }
            },
            {
                page
            }
        );

        if (!vendas) {
            return [];
        }

        return vendas;

    };

    async findByProdutoNome({ nome, page, perPage }: IRequest) {
        const paginate = createPaginator({ perPage });
        const vendas = await paginate<Venda, Prisma.VendaFindManyArgs>(
            prisma.venda,
            {
                where: {
                    Item: {
                        some: {
                            Produto: {
                                Nome: {
                                    contains: nome,
                                    mode: 'insensitive'
                                }
                            }
                        }
                    }
                },
                include: {
                    Item: {
                        select: {
                            Quantidade: true,
                            PrecoUnitario: true,
                            Produto: true
                        }
                    }
                }
            },
            {
                page
            }
        );

        if (!vendas) {
            return [];
        }

        return vendas;

    };
}

export { VendaService };