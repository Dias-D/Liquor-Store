import { Router } from "express";
import { ClienteController } from "@modules/clientes/ClienteController";

const router = Router();
const clienteController = new ClienteController();

router.get("/cliente/:id", clienteController.findId);

export { router };