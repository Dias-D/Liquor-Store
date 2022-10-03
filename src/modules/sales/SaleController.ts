import { Request, Response } from "express";
import { SaleService } from "./SaleService";

const saleService = new SaleService();

class SaleController {
    async findByDate(request: Request, response: Response) {
        const { startDate, endDate } = request.body;
        const page = <string>request.query.page;
        const perPage = <string>request.query.perPage;

        const sales = await saleService.findByDate({ startDate, endDate, page, perPage });

        if (!sales) {
            return response.send({ message: "Sales not found!" });
        }

        response.send(sales);
    }

    async findByCustomerName(request: Request, response: Response) {
        const { name } = request.body;
        const page = <string>request.query.page;
        const perPage = <string>request.query.perPage;

        const sales = await saleService.findByCustomerName({ name, page, perPage });

        if (!sales) {
            return response.send({ message: "Sales not found!" });
        }

        response.send(sales);
    }

    async findByProductName(request: Request, response: Response) {
        const { name } = request.body;
        const page = <string>request.query.page;
        const perPage = <string>request.query.perPage;

        const sales = await saleService.findByProductName({ name, page, perPage });

        if (!sales) {
            return response.send({ message: "Sales not found!" });
        }

        response.send(sales);
    }
}

export { SaleController };