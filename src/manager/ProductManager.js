import ProductMongooseDAO from "../dao/productMongooseDAO.js";

class ProductManager{
        #productManagerDAO;
    constructor(){
        this.#productManagerDAO = new ProductMongooseDAO();
    }

    async add(product){
        const newProduct = await this.#productManagerDAO.insertOne(product);
        return newProduct;
    }
    async getAll(){
        const products = await this.#productManagerDAO.findAll();
        return products;
    }

    async getMany(limit){
        const products = await this.#productManagerDAO.getMany(limit);
        return products;
    }
    
    async getOne(pid){
        try {
            const product = await this.#productManagerDAO.findById(pid);
            return product;
        } catch (error) {
          throw new Error(error.message);  
        }
        
    }
    async updateOne(pid,data){
        const updatedProduct = await this.#productManagerDAO.updateOne(pid,data);
        return updatedProduct;
    }
    async deleteOne(pid){
        const productDeleted = await this.#productManagerDAO.deleteOne(pid);
        return productDeleted;
    }
}

export default ProductManager;