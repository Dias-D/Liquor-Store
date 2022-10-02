import { Request, Response } from "express";
import { ProdutoService } from "./ProdutoService";

const produtoService = new ProdutoService();

class ProdutoController {
    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const produto = await produtoService.findById({ id });

        return response.status(200).send(produto);
    }

    async findByNome(request: Request, response: Response): Promise<Response> {
        const { nome } = request.body;

        const produtos = await produtoService.findByNome({ nome });

        return response.status(200).send(produtos);
    }

    async findByTeorAlcoolico(request: Request, response: Response): Promise<Response> {
        const { minimum, maximum } = request.body;

        const produtos = await produtoService.findByTeorAlcoolico({ minimum, maximum });

        return response.status(200).send(produtos);
    }
}

export { ProdutoController };