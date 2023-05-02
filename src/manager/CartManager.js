import CartMongooseDAO from "../dao/cartMongooseDAO.js";


class CartManager{
    #cartMongooseDAO;
    constructor(path){
        this.#cartMongooseDAO = new CartMongooseDAO();
    }
    
    async createCart(){
        try {
            await this.#cartMongooseDAO.create({products:[]}) ;
        } catch (error) {
            throw new Error(error.message);     
        }
    }
    async add(cartId,productId) {
        try {
            //const newCart = this.#cartMongooseDAO.insertOne({_id:cartId},productId)
        } catch (error) {
            
        }
    }
    async get(cartId){
        try {

        } catch (error) {

        }
    }

}

export default CartManager;