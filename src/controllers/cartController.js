import CartManager from "../manager/CartManager.js"

class CartController{

    static create = async (req,res,next)=>{
        try {
            const cartM = new CartManager();
            await cartM.createCart();
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default CartController;