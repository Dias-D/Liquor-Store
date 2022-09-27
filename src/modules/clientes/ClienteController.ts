import Clientes from '../../data/Clientes.json';

class ClienteController {
    findAll(req, res) {
        return res.status(201).send(Clientes);
    }
}

export { ClienteController };