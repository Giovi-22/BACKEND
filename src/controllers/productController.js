import ProductManager from '../manager/ProductManager.js';
class ProductController{

    static addProduct = async (req,res,next)=>{
            const product = req.body;
            try {
                const pManager = new ProductManager();
                const newProduct = await pManager.add(product);
                res.status(201).json({status:'success',data:newProduct});
            } catch (error) {
                next({statusCode:error.cause.statusCode, message:error.cause.message});
                return;
            }
    }

    static getProducts = async (req,res,next)=>{
        try {
            const pManager = new ProductManager();
            const products = await pManager.getAll();
            res.status(200).json({status:'success',data:products});
        } catch (error) {
            next({statusCode:500, message:error.message});
            return;
        }
    }
    static getManyProducts = async (req,res,next)=>{
        const limit = req.query.limit;
        try {
            const pManager = new ProductManager();
            const products = await pManager.getMany(limit);
            res.status(200).json({status:'success',data:products});
        } catch (error) {
            next({statusCode:500, message:error.message});
            return;
        }
    }
    static getOneProduct = async (req,res,next)=>{
        const pid = req.params.pid;
        try {
            const pManager = new ProductManager();
            const product = await pManager.getOne(pid);
            res.status(200).json({status:'success',data:product});
        } catch (error) {
            console.log("error en getONeProduct")
            next({statusCode:500, message:error.message})
        }
    }


    static updateProduct = async (req,res,next)=>{
        const pid = req.params.pid;
        const data = req.body;
        try {
            const pManager = new ProductManager();
            const productUpdated = await pManager.updateOne(pid,data);
            res.status(200).json({status:'success',data:productUpdated});
        } catch (error) {
            next({statusCode:500, message:error.message})
            return;
        }
    }

    static deleteProduct = async (req,res,next)=>{
        const pid = req.params.pid;
        try {
            const pManager = new ProductManager();
            const productDeleted = await pManager.deleteOne(pid);
            res.status(200).json({status:'success',data:productDeleted});
        } catch (error) {
            next({statusCode:500, message:error.message})
            return;
        }
    }

}

export default ProductController;