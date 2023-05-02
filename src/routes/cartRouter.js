import { Router } from "express";
import CartController from "../controllers/cartController.js";



const cartRouter = Router();

cartRouter.get('/',CartController.getAll);
cartRouter.get('/:cid',CartController.get);
cartRouter.post('/',CartController.create);
cartRouter.put('/:cid/',CartController.updateCart);
cartRouter.delete('/:cid',CartController.delete);

export default cartRouter;