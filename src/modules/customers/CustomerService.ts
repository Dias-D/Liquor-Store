import { PrismaClient } from "@prisma/client";

interface IRequest {
    id?: string;
    name?: string;
    startDate?: Date;
    endDate?: Date;
}

const prisma = new PrismaClient();

class CustomerService {
    async findById({ id }: IRequest) {
        try {
            return await prisma.customer.findUnique({
                where: { id }
            });
        } catch (e) {
            console.log(e);
        }
    }

    async findByName({ name }: IRequest) {
        try {
            return await prisma.customer.findMany({
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

    async findByBirthDate({ startDate, endDate }: IRequest) {
        try {
            return await prisma.customer.findMany({
                where: {
                    birthDate: {
                        gte: new Date(startDate),
                        lte: new Date(endDate)
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
    };
}

export { CustomerService };