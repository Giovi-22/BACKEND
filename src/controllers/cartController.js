import CartManager from "../manager/CartManager.js"

class CartController{

    static create = async (req,res,next)=>{
        try {
            const cartM = new CartManager();
            const newCart = await cartM.createCart();
            res.status(201).json({status:"success",data:newCart});
        } catch (error) {
            next({statusCode:error.cause?.statusCode ?? 500, message:error.message});
            return;
        }
    }

    static updateCart = async (req,res,next)=>{
        const cid = req.params.cid;
        const data = req.body;
        try {
            const cartM = new CartManager();
            const updatedCart = await cartM.addOne(cid,data);
            res.status(200).json({status:"success",data:updatedCart});
        } catch (error) {
            next({statusCode:error.cause?.statusCode ?? 500, message:error.message});
            return;
        }
    }
    static getAll = async (req,res,next)=>{
        try {
            const cartM = new CartManager();
            const carts = await cartM.getAll();
            res.status(200).json({status:"success",data:carts});
        } catch (error) {
            next({statusCode:error.cause?.statusCode ?? 500, message:error.message});
            return;
        }
    }

    static get = async (req,res,next)=>{
        const cid = req.params.cid;
        console.log("cid: ",cid)
        try {
            const cartM = new CartManager();
            const cart = await cartM.getOne(cid);
            res.status(200).json({status:"success",data:cart});
        } catch (error) {
            next({statusCode:error.cause?.statusCode ?? 500, message:error.message});
            return;
        }
    }

    static delete = async (req,res,next)=>{
        const cid = req.params.cid;
        try {
            const cartM = new CartManager();
            const cartDeleted = await cartM.deleteOne(cid);
            res.status(200).json({status:"success",data:cartDeleted});
        } catch (error) {
            next({statusCode:error.cause?.statusCode ?? 500, message:error.message});
            return;
        }
    }
}

export default CartController;