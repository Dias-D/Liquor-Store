import { Router } from "express";
import { ClienteController } from "@modules/clientes/ClienteController";
import { ProdutoController } from "@modules/produtos/ProdutoController";

const router = Router();
const clienteController = new ClienteController();
const produtoController = new ProdutoController();

router.get("/clientes/findById/:id", clienteController.findById);
router.get("/clientes/listByNome", clienteController.findByNome);
router.get("/clientes/listByDataNascimento", clienteController.findByDataNascimento);

router.get("/produtos/findById/:id", produtoController.findById);
router.get("/produtos/listByNome", produtoController.findByNome);
router.get("/produtos/listByTeorAlcoolico", produtoController.findByTeorAlcoolico);

export { router };