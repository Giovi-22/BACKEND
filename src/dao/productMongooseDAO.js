import { productModel } from "../models/productModel.js";

class ProductMongooseDAO{

    async insertOne(product){
        const newProduct = await productModel.create(product);
        return {
            id: newProduct._id,
            title: newProduct.title,
            description: newProduct.description,
            price: newProduct.price,
            thumbnail: newProduct.thumbnail,
            stock: newProduct.stock,
            code: newProduct.code,
            status: newProduct.status,
            category: newProduct.category
        }
    }

    async findAll(){
        const products = await productModel.find();
        return products.map(product =>({
            id: product._id,
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            stock: product.stock,
            code: product.code,
            status: product.status,
            category: product.category
        }))
    }

    async findById(pid){
        try {
            const product = await productModel.findById(pid);
            return {
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
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateOne(pid,data){
        const productUpdated = await productModel.findOneAndUpdate({_id:pid},data,{new:true});
        return {
            id: productUpdated._id,
            title: productUpdated.title,
            description: productUpdated.description,
            price: productUpdated.price,
            thumbnail: productUpdated.thumbnail,
            stock: productUpdated.stock,
            code: productUpdated.code,
            status: productUpdated.status,
            category: productUpdated.category
        }
    }

    async deleteOne(pid){
        const productDeleted = await productModel.findOneAndDelete({_id:pid});
        return {
            id: productDeleted._id,
            title: productDeleted.title,
            description: productDeleted.description,
            price: productDeleted.price,
            thumbnail: productDeleted.thumbnail,
            stock: productDeleted.stock,
            code: productDeleted.code,
            status: productDeleted.status,
            category: productDeleted.category
        }
    }
}

export default ProductMongooseDAO;