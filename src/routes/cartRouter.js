import { Router } from "express";
//import CartController from "../controllers/productController.js";


const cartRouter = Router();

cartRouter.get('/',"CartController");
cartRouter.get('/:pid',"CartController");
cartRouter.post('/',"CartController");
cartRouter.put('/:pid',"CartController");
cartRouter.delete('/:pid',"CartController");

export default cartRouter;