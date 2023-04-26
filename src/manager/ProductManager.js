//import ProductMongooseDAO from './ProductMongooseDAO'

class ProductManager{
        #productList;

    constructor(){
        //this.#productManagerDAO = new ProductMongooseDAO();
        this.#productList = [];
    }

    async add(product){
        //const newProduct = await this.#productManagerDAO.insert(product);
        const newProduct = product;
        this.#productList.push(newProduct);
        console.log("producto agregado",newProduct);
        return newProduct;
    }
    async getAll(){
        //const products = await this.#productManagerDAO.getAll();
        const products = this.#productList;
        return products;
    }

    async getMany(limit){
        //const products = await this.#productManagerDAO.getMany(limit);
        const products = this.#productList.map((product)=>product,limit);
        return products;
    }
    
    async getOne(pid){
        //const product = await this.#productManagerDAO.getOne(pid);
        const product = this.#productList.at(pid);
        return product;
    }
    async updateOne(pid,data){
        //const updatedProduct = await this.#productManagerDAO.updateOne(pid,data);
        const updatedProduct  = Object.assign(this.#productList.at(pid),data);
        return updatedProduct;
    }
    async deleteOne(pid){
        //const state = await this.#productManagerDAO.deleteOne(pid);
        const state = this.#productList.filter((product,index)=> index != pid);
        return state;
    }
}

export default ProductManager;