import { Router } from "express";
import { ClienteController } from "@modules/clientes/ClienteController";

const router = Router();
const clienteController = new ClienteController();

router.get("/cliente/:id", clienteController.findById);
router.get("/clientes/listByNome", clienteController.findByNome);
router.get("/clientes/listByDataNascimento", clienteController.findByDataNascimento);

export { router };