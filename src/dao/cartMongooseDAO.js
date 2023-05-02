import { cartModel } from "../models/cartModel.js"


class CartMongooseDAO{

    async create(newCart){
        try {
            const cart = await cartModel.create(newCart);
            return {
                id: cart._id,
                products: cart.products,
                status:cart.status
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateOne(cid,data){
        try {
            const cart = await cartModel.findOneAndUpdate({_id:cid},data,{new:true});
            return {
                id:cart._id,
                products:cart.products,
                status:cart.status
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    async find(filter){
        try {
            const carts = await cartModel.find(filter);
            return carts.map(cart=>({
                id:cart._id,
                products:cart.products,
                status:cart.status
            }));
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findById(cid){
        try {
            const cart = await cartModel.findById(cid);
            return {
                id:cart._id,
                products:cart.products,
                status:cart.status
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

export default CartMongooseDAO;