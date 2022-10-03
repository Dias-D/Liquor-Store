import { PrismaClient } from "@prisma/client";

interface IRequest {
    id?: string;
    name?: string;
    minimum?: string;
    maximum?: string;
}

const prisma = new PrismaClient();

class ProductService {
    async findById({ id }: IRequest) {
        try {
            return await prisma.product.findUnique({
                where: { id }
            });
        } catch (e) {
            console.log(e);
        }
    }

    async findByName({ name }: IRequest) {
        try {
            return await prisma.product.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    async findByAlcoholContent({ minimum, maximum }: IRequest) {
        try {
            return await prisma.product.findMany({
                where: {
                    alcoholContent: {
                        gte: minimum,
                        lte: maximum
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export { ProductService };