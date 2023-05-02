import { cartModel } from "../models/cartModel.js"


class CartMongooseDAO{

    async create(newCart){
        try {
            return cartModel.create(newCart);
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

export default CartMongooseDAO;