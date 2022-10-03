import { Request, Response } from "express";
import { CustomerService } from "./CustomerService";

const customerService = new CustomerService();
class CustomerController {
    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const customer = await customerService.findById({ id });

        if (!customer) {
            return response.send({ message: "Customer not found!" });
        }

        return response.send(customer);
    }

    async findByName(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const customers = await customerService.findByName({ name });
        console.log(customers);

        if (!customers.length) {
            return response.send({ message: "Customer not found!" });
        }

        return response.send(customers);
    }

    async findByBirthDate(request: Request, response: Response): Promise<Response> {
        const { startDate, endDate } = request.body;

        const customers = await customerService.findByBirthDate({ startDate, endDate });

        if (!customers.length) {
            return response.send({ message: "Customer not found!" });
        }

        return response.send(customers);
    }
}

export { CustomerController };