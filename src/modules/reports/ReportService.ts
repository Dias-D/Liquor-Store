import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ReportService {
    async countSalesByCustomer() {
        try {
            return await prisma.customer.findMany({
                include: {
                    _count: {
                        select: {
                            sale: true
                        }
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export { ReportService };