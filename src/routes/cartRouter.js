import { Router } from "express";
import CartController from "../controllers/cartController.js";



const cartRouter = Router();

//cartRouter.get('/',"");
//cartRouter.get('/:pid',"CartController");
cartRouter.post('/',CartController.create);
//cartRouter.put('/:pid',"CartController");
//cartRouter.delete('/:pid',"CartController");

export default cartRouter;