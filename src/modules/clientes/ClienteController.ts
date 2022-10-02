import { Request, Response } from "express";
import { ClienteService } from "./ClienteService";

const clienteService = new ClienteService();
class ClienteController {
    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const cliente = await clienteService.findById({ id });

        return response.status(200).send(cliente);
    }

    async findByNome(request: Request, response: Response): Promise<Response> {
        const { nome } = request.body;

        const clientes = await clienteService.findByNome({ nome });

        return response.status(200).send(clientes);
    }

    async findByDataNascimento(request: Request, response: Response): Promise<Response> {
        const { startDate, endDate } = request.body;

        const clientes = await clienteService.findByDataNascimento({ startDate, endDate });

        return response.status(200).send(clientes);
    }
}

export { ClienteController };