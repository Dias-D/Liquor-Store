import { Router } from "express";
import { CustomerController } from "@modules/customers/CustomerController";
import { ProductController } from "@modules/products/ProductController";
import { SaleController } from "@modules/sales/SaleController";
import { ReportController } from "@modules/reports/ReportController";

const router = Router();
const customerController = new CustomerController();
const productController = new ProductController();
const reportController = new ReportController();
const saleController = new SaleController();

router.get("/customers/findById/:id", customerController.findById);
router.get("/customers/listByName", customerController.findByName);
router.get("/customers/listByBirthDate", customerController.findByBirthDate);

router.get("/products/findById/:id", productController.findById);
router.get("/products/listByName", productController.findByName);
router.get("/products/listByAlcoholContent", productController.findByAlcoholContent);

router.get("/sales/listByDate", saleController.findByDate);
router.get("/sales/listByCustomerName", saleController.findByCustomerName);
router.get("/sales/listByProductName", saleController.findByProductName);

router.get("/reports/countSalesByCustomer", reportController.countSalesByCustomer);

export { router };