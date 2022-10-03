import { Request, Response } from "express";
import { VendaService } from "./VendaService";

const vendaService = new VendaService();

class VendaController {
    async findByData(request: Request, response: Response) {
        const { startDate, endDate } = request.body;
        const page = <string>request.query.page;
        const perPage = <string>request.query.perPage;

        const clientes = await vendaService.findByData({ startDate, endDate, page, perPage });

        response.status(200).send(clientes);
    }

    async findByClienteNome(request: Request, response: Response) {
        const { nome } = request.body;
        const page = <string>request.query.page;
        const perPage = <string>request.query.perPage;

        const clientes = await vendaService.findByClienteNome({ nome, page, perPage });

        response.status(200).send(clientes);
    }

    async findByProdutoNome(request: Request, response: Response) {
        const { nome } = request.body;
        const page = <string>request.query.page;
        const perPage = <string>request.query.perPage;

        const clientes = await vendaService.findByProdutoNome({ nome, page, perPage });

        response.status(200).send(clientes);
    }
}

export { VendaController };