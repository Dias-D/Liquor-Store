import clientes from '../../data/Clientes.json';

class ClienteService {
    findAll() {
        return clientes;
    }

    findOne(id: string) {
        const cliente = clientes.find((cliente) => cliente.id === id);

        if (!cliente) {
            return false;
        }

        return clientes.find((cliente) => cliente.id === id);
    }
}

export { ClienteService };