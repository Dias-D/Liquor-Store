import { PrismaClient } from "@prisma/client";

interface IRequest {
    id?: string;
    nome?: string;
    startDate?: Date;
    endDate?: Date;
}

const prisma = new PrismaClient();

class ClienteService {
    async findById({ id }: IRequest) {
        const cliente = await prisma.cliente.findUnique({
            where: { id }
        });

        if (!cliente) {
            return [];
        }

        return cliente;
    }

    async findByNome({ nome }: IRequest) {
        const clientes = await prisma.cliente.findMany({
            where: {
                Nome: {
                    contains: nome,
                    mode: 'insensitive'
                }
            }
        });

        if (!clientes) {
            return [];
        }

        return clientes;
    }

    async findByDataNascimento({ startDate, endDate }: IRequest) {
        const clientes = await prisma.cliente.findMany({
            where: {
                DataNascimento: {
                    gte: new Date(startDate),
                    lt: new Date(endDate)
                }
            }
        });

        return clientes;
    };
}

export { ClienteService };