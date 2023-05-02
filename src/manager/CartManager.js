import CartMongooseDAO from "../dao/cartMongooseDAO.js";


class CartManager{
    #cartMongooseDAO;
    constructor(path){
        this.#cartMongooseDAO = new CartMongooseDAO();
    }
    
    async createCart(){
        try {
            const newCart = await this.#cartMongooseDAO.create({products:[],status:true}) ;
            return newCart;
        } catch (error) {
            throw new Error(error.message);     
        }
    }
    async addOne(cid,data) {
        try {
            const cart = await this.#cartMongooseDAO.findById(cid);
            const index = cart.products.findIndex(product => product.pid === data.pid);
            if(index === -1){
                cart.products.push(data);
                return this.#cartMongooseDAO.updateOne(cart.id,{products:cart.products});
            }
            Object.assign(cart.products.at(index),{quantity:data.quantity});
            return this.#cartMongooseDAO.updateOne(cart.id,{products:cart.products})
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getAll(){
        try {
            const carts = this.#cartMongooseDAO.find({status:{$ne:false}});
            return carts;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getOne(cid){
        try {
            const cart = this.#cartMongooseDAO.findById(cid);
            return cart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteOne(cid){
        try {
            const cart = this.#cartMongooseDAO.updateOne(cid,{status:false});
            return cart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

export default CartManager;