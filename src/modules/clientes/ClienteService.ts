import { clientes } from '../../../prisma/seed/data/Clientes';

class ClienteService {
    findAll() {
        return clientes;
    }

    findId(id: string) {
        const cliente = clientes.find((cliente) => cliente.id === id);

        if (!cliente) {
            return [];
        }

        return clientes.find((cliente) => cliente.id === id);
    }
}

export { ClienteService };