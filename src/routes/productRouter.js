import { Router } from "express";
import ProductController from "../controllers/productController.js";
import { productValidator } from "../middelwares/productValidator.js";

const pRouter = Router();

pRouter.get('/',ProductController.getProducts);
pRouter.get('/:pid',ProductController.getOneProduct);
pRouter.post('/',productValidator,ProductController.addProduct);
pRouter.put('/:pid',ProductController.updateProduct);
pRouter.delete('/:pid',ProductController.deleteProduct);

export default pRouter;