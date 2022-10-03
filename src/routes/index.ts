import { Router } from "express";
import { ClienteController } from "@modules/clientes/ClienteController";
import { ProdutoController } from "@modules/produtos/ProdutoController";
import { VendaController } from "@modules/vendas/VendaController";

const router = Router();
const clienteController = new ClienteController();
const produtoController = new ProdutoController();
const vendaController = new VendaController();

router.get("/clientes/findById/:id", clienteController.findById);
router.get("/clientes/listByNome", clienteController.findByNome);
router.get("/clientes/listByDataNascimento", clienteController.findByDataNascimento);

router.get("/produtos/findById/:id", produtoController.findById);
router.get("/produtos/listByNome", produtoController.findByNome);
router.get("/produtos/listByTeorAlcoolico", produtoController.findByTeorAlcoolico);

router.get("/vendas/listByData", vendaController.findByData);
router.get("/vendas/listByClienteNome", vendaController.findByClienteNome);
router.get("/vendas/listByProdutoNome", vendaController.findByProdutoNome);

export { router };