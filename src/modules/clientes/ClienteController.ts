import { Request, Response } from "express";
import { ClienteService } from "./ClienteService";

const clienteService = new ClienteService();
class ClienteController {
    async findId(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const cliente = await clienteService.findId({ id });

        return response.status(201).send(cliente);
    }
}

export { ClienteController };