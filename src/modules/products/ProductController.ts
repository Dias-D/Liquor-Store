import { Request, Response } from "express";
import { ProductService } from "./ProductService";

const productService = new ProductService();

class ProductController {
    async findById(request: Request, response: Response) {
        const { id } = request.params;

        const product = await productService.findById({ id });

        if (!product) {
            return response.send({ message: "Product not found!" });
        }

        return response.send(product);
    }

    async findByName(request: Request, response: Response) {
        const { name } = request.body;

        const products = await productService.findByName({ name });

        if (!products.length) {
            return response.send({ message: "Products not found!" });
        }

        return response.send(products);
    }

    async findByAlcoholContent(request: Request, response: Response) {
        const { minimum, maximum } = request.body;

        const products = await productService.findByAlcoholContent({ minimum, maximum });

        if (!products.length) {
            return response.send({ message: "Products not found!" });
        }

        return response.send(products);
    }
}

export { ProductController };