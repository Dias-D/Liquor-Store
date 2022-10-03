import { Prisma, PrismaClient, Sale } from "@prisma/client";
import { createPaginator } from "prisma-pagination";

const prisma = new PrismaClient();

interface IRequest {
    endDate?: Date;
    name?: string;
    page?: string | '1';
    perPage?: string | '20';
    startDate?: Date;
}

class SaleService {
    async findByDate({ startDate, endDate, page, perPage }: IRequest) {
        try {
            const paginate = createPaginator({ perPage });
            return await paginate<Sale, Prisma.SaleFindManyArgs>(
                prisma.sale,
                {
                    where: {
                        date: {
                            gte: new Date(startDate),
                            lte: new Date(endDate)
                        }
                    },
                    include: {
                        saleProduct: true
                    }
                },
                {
                    page
                }
            );
        } catch (e) {
            console.log(e);
        }
    }

    async findByCustomerName({ name, page, perPage }: IRequest) {
        try {
            const paginate = createPaginator({ perPage });
            return await paginate<Sale, Prisma.SaleFindManyArgs>(
                prisma.sale,
                {
                    where: {
                        customer: {
                            name: {
                                contains: name,
                                mode: 'insensitive'
                            }
                        }
                    },
                    include: {
                        customer: true
                    }
                },
                {
                    page
                }
            );
        } catch (e) {
            console.log(e);
        }

    };

    async findByProductName({ name, page, perPage }: IRequest) {
        try {
            const paginate = createPaginator({ perPage });
            return await paginate<Sale, Prisma.SaleFindManyArgs>(
                prisma.sale,
                {
                    where: {
                        saleProduct: {
                            some: {
                                product: {
                                    name: {
                                        contains: name,
                                        mode: 'insensitive'
                                    }
                                }
                            }
                        }
                    },
                    include: {
                        saleProduct: {
                            select: {
                                amount: true,
                                unitPrice: true,
                                product: true
                            }
                        }
                    }
                },
                {
                    page
                }
            );
        } catch (e) {
            console.log(e);
        }
    };
}

export { SaleService };