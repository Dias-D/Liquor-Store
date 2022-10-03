import { Request, Response } from "express";
import { ReportService } from "./ReportService";

const reportService = new ReportService();

class ReportController {
    async countSalesByCustomer(request: Request, response: Response) {
        const report = await reportService.countSalesByCustomer();

        response.send(report);
    }
}

export { ReportController };