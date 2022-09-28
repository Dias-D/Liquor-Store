import { beforeEach, describe, expect, test } from 'vitest';
import { ClienteService } from "./ClienteService";

let clienteService: ClienteService;

describe('Serviços de CLientes', () => {

    beforeEach(() => {
        clienteService = new ClienteService();
    });

    test('Buscar todos os clientes', () => {
        const clientes = clienteService.findAll();

        expect(clientes).not.toBeNull();
    });

    test('Buscar o cliente por um ID inválido', () => {
        const id = '8454-46511651afda-s51asd';
        const cliente = clienteService.findOne(id);

        expect(cliente).toBeFalsy();
    });

    test('Buscar o cliente pelo ID', () => {
        const id = '963a997a-6bfc-41b2-8125-c27d2f4c4de4';
        const cliente = clienteService.findOne(id);

        expect(cliente).toHaveProperty('id');
    });

});