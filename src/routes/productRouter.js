import { Router } from "express";
import ProductController from "../controllers/productController.js";

const pRouter = Router();

pRouter.get('/',ProductController.getProducts);
pRouter.get('/:pid',ProductController.getOneProduct);
pRouter.post('/',ProductController.addProduct);
pRouter.put('/:pid',ProductController.updateProduct);
pRouter.delete('/:pid',ProductController.deleteProduct);

export default pRouter;