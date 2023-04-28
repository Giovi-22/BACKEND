import { productModel } from "../models/productModel.js";

class ProductMongooseDAO{

    async insertOne(product){
        return productModel.create(product);
    }

    async findOne(pid){
        const product = await productModel.findById(pid);
        const result = {
            id: product._id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            stock: product.stock,
            code: product.code,
            status: product.status,
            category: product.category
        }
        return result;
    }
}

export default ProductMongooseDAO;