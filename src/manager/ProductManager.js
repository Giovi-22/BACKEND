//import ProductMongooseDAO from './ProductMongooseDAO'

class ProductManager{

    /*
    this.#name,
        this.#description,
        this.#title,
        this.#stock,
        this.#price,
        this.#thumbnail,
        this.#code,
        this.#category,
        this.#status
        */
    constructor(){
        this.#productManagerDAO = new ProductMongooseDAO();
    }

    async add(product){
        const newProduct = await this.#productManagerDAO.insert(product);
        return newProduct;
    }
    
    async getOne(pid){
        const product = await this.#productManagerDAO.getOne(pid);
        return product;
    }
    async updateOne(pid,data){
        const updatedProduct = await this.#productManagerDAO.updateOne(pid,data);
        return updatedProduct;
    }
    async deleteOne(pid){
        const state = await this.#productManagerDAO.deleteOne(pid);
        return state;
    }
}

export default ProductManager;