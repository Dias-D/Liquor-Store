import { ClienteService } from "./ClienteService";
class ClienteController {
    findAll(request, response) {
        const clienteService = new ClienteService();

        const clientes = clienteService.findAll();

        return response.status(201).send(clientes);
    }
}

export { ClienteController };