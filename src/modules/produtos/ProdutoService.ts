import { PrismaClient } from "@prisma/client";

interface IRequest {
    id?: string;
    nome?: string;
    minimum?: string;
    maximum?: string;
}

const prisma = new PrismaClient();

class ProdutoService {
    async findById({ id }: IRequest) {
        const produto = await prisma.produto.findUnique({
            where: { id }
        });

        if (!produto) {
            return [];
        }

        return produto;
    }

    async findByNome({ nome }: IRequest) {
        const produtos = await prisma.produto.findMany({
            where: {
                Nome: {
                    contains: nome,
                    mode: 'insensitive'
                }
            }
        });

        if (!produtos) {
            return [];
        }

        return produtos;
    }

    async findByTeorAlcoolico({ minimum, maximum }: IRequest) {
        const produtos = await prisma.produto.findMany({
            where: {
                TeorAlcoolico: {
                    gte: minimum,
                    lte: maximum
                }
            }
        });

        if (!produtos) {
            return [];
        }

        return produtos;
    };
}

export { ProdutoService };