import { beforeEach, describe, expect, test } from 'vitest';
import { CustomerService } from "./CustomerService";

let customerService: CustomerService;

describe('Customer Services', () => {

    beforeEach(() => {
        customerService = new CustomerService();
    });

    test('should be an invalid ID search and nothing found', async () => {
        const id = '8454-46511651afda-s51asd';
        const customer = await customerService.findById({ id });

        expect(customer).toBeNull();
    });

    test('should be an ID search', async () => {
        // Trazer o name do id em especifico
        const id = '0463c6c9-dbe7-447f-a27d-72a977108d19';
        const customer = await customerService.findById({ id });

        expect(customer).toHaveProperty('id');
        expect(customer).toHaveProperty('name');
        expect(customer.name).toBe('Rafael Costa');
        expect(customer).toHaveProperty('birthDate');
        expect(customer.birthDate).toBe('1985-02-01');
    });


    test('should be a search for letters of a name and not find anything', async () => {
        const name = 'xwy';
        const customers = await customerService.findByName({ name });

        expect(customers).toEqual([]);
    });

    test('should be a search for letters of a name', async () => {
        const name = 'uca';
        const customers = await customerService.findByName({ name });

        customers.forEach((customer) => {
            expect(customer).toHaveProperty('id');
            expect(customer).toHaveProperty('name');
            expect(customer).toHaveProperty('birthDate');
        });
    });

    test('should be a customers birth date search', async () => {
        const startDate = new Date('1992-02-15');
        const endDate = new Date('1997-12-03');

        const customers = await customerService.findByBirthDate({ startDate, endDate });

        customers.forEach((customer) => {
            expect(customer).toHaveProperty('id');
            expect(customer).toHaveProperty('name');
            expect(customer).toHaveProperty('birthDate');
        });
    });

});