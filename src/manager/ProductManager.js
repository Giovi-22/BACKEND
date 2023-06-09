import ProductMongooseDAO from "../dao/productMongooseDAO.js";

class ProductManager{
        #productManagerDAO;
    constructor(){
        this.#productManagerDAO = new ProductMongooseDAO();
    }

    async add(product){
        try {
            const codeExist = await this.#productManagerDAO.findByFilter({code:product.code});
            if(codeExist.length){
                throw new Error("El código del producto ya existe",{cause:{statusCode:400}});
            }
            const newProduct = await this.#productManagerDAO.insertOne(product);
            return newProduct;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause?.statusCode && 500});
        }
        
    }
    async get(limit){
        try {
            const products = await this.#productManagerDAO.find(limit);
            return products;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause?.statusCode && 500});
        }
    }

    async getMany(limit){
        try {
            const products = await this.#productManagerDAO.findTo(limit);
            return products;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause?.statusCode && 500});
        }
        
    }
    
    async getOne(pid){
        try {
            const product = await this.#productManagerDAO.findById(pid);
            return product;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause?.statusCode && 500});  
        }
        
    }
    async updateOne(pid,data){
        try {
            const updatedProduct = await this.#productManagerDAO.updateOne(pid,data);
            return updatedProduct;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause?.statusCode && 500}); 
        }
        
    }
    async deleteOne(pid){
        try {
            const productDeleted = await this.#productManagerDAO.updateOne(pid,{status:false});
            return productDeleted;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause?.statusCode && 500}); 
        }
        
    }
}

export default ProductManager;