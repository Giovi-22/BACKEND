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
                throw new Error("Error en la base de datos",{cause:{statusCode:400,message:"El codigo de producto ya existe"}});
            }
            const newProduct = await this.#productManagerDAO.insertOne(product);
            return newProduct;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause});
        }
        
    }
    async getAll(){
        try {
            const products = await this.#productManagerDAO.findAll();
            return products;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause});
        }
    }

    async getMany(limit){
        try {
            const products = await this.#productManagerDAO.getMany(limit);
            return products;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause});
        }
        
    }
    
    async getOne(pid){
        try {
            const product = await this.#productManagerDAO.findById(pid);
            return product;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause});  
        }
        
    }
    async updateOne(pid,data){
        try {
            const updatedProduct = await this.#productManagerDAO.updateOne(pid,data);
            return updatedProduct;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause}); 
        }
        
    }
    async deleteOne(pid){
        try {
            const productDeleted = await this.#productManagerDAO.updateOne(pid,{status:false});
            return productDeleted;
        } catch (error) {
            throw new Error(error.message,{cause:error.cause}); 
        }
        
    }
}

export default ProductManager;