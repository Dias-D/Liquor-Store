import { PrismaClient } from "@prisma/client";

interface IRequest {
    id?: string;
    nome?: string;
    dataNascimento?: string;
}

const prisma = new PrismaClient();

class ClienteService {
    async findId({ id }: IRequest) {
        const cliente = await prisma.cliente.findUnique({
            where: { id }
        });

        return cliente;
    }
}

export { ClienteService };