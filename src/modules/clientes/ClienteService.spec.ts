import { beforeEach, describe, expect, test } from 'vitest';
import { ClienteService } from "./ClienteService";

let clienteService: ClienteService;

describe('Serviços de CLientes', () => {

    beforeEach(() => {
        clienteService = new ClienteService();
    });

    test('Buscar o cliente por um ID inválido', async () => {
        const id = '8454-46511651afda-s51asd';
        const cliente = await clienteService.findById({ id });

        expect(cliente).toEqual([]);
    });

    test('Buscar o cliente pelo ID', async () => {
        const id = '963a997a-6bfc-41b2-8125-c27d2f4c4de4';
        const cliente = await clienteService.findById({ id });

        expect(cliente).toHaveProperty('id');
        expect(cliente).toHaveProperty('Nome');
        expect(cliente).toHaveProperty('DataNascimento');
    });


    test('Buscar cliente por letras inexistentes em seus nomes', async () => {
        const nome = 'xwy';
        const clientes = await clienteService.findByNome({ nome });

        expect(clientes).toEqual([]);
    });

    test('Buscar clientes pelas letras de seus nomes', async () => {
        const nome = 'uca';
        const clientes = await clienteService.findByNome({ nome });

        clientes.forEach((cliente) => {
            expect(cliente).toHaveProperty('id');
            expect(cliente).toHaveProperty('Nome');
            expect(cliente).toHaveProperty('DataNascimento');
        });
    });

    test('Buscar cliente por data de nascimento', async () => {
        const startDate = new Date('1992-02-15');
        const endDate = new Date('1997-12-03');

        const clientes = await clienteService.findByDataNascimento({ startDate, endDate });

        clientes.forEach((cliente) => {
            expect(cliente).toHaveProperty('id');
            expect(cliente).toHaveProperty('Nome');
            expect(cliente).toHaveProperty('DataNascimento');
        });
    });

});