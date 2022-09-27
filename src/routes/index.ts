import { Router } from "express";
import { ClienteController } from "@modules/clientes/ClienteController";

const router = Router();
const clienteController = new ClienteController();

router.get("/clientes", clienteController.findAll);

export { router };