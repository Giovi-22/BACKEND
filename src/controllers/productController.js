import ProductManager from '../manager/ProductManager.js';
const pManager = new ProductManager();
class ProductController{

    static addProduct = async (req,res)=>{
            const product = req.body;
            try {
                //const pManager = new ProductManager();
                const newProduct = await pManager.add(product);
                res.status(201).json({status:'success',data:newProduct});
            } catch (error) {
                res.status(500).json({status:'error',message:`Se ha producido un error: ${error.message}`});
                console.log(`Se ha producido un error: ${error.message}`);
            }
    }

    static getProducts = async (req,res)=>{
        try {
            //const pManager = new ProductManager();
            const products = await pManager.getAll();
            res.status(200).json({status:'success',data:products});
        } catch (error) {
            res.status(500).json({status:'error',message:`Se ha producido un error: ${error.message}`});
            console.log(`Se ha producido un error: ${error.message}`);
        }
    }
    static getManyProducts = async (req,res)=>{
        const limit = req.query.limit;
        try {
            //const pManager = new ProductManager();
            const products = await pManager.getMany(limit);
            res.status(200).json({status:'success',data:products});
        } catch (error) {
            res.status(500).json({status:'error',message:`Se ha producido un error: ${error.message}`});
            console.log(`Se ha producido un error: ${error.message}`);
        }
    }
    static getOneProduct = async (req,res)=>{
        const pid = req.params.pid;
        try {
            //const pManager = new ProductManager();
            const product = await pManager.getOne(pid);
            res.status(200).json({status:'success',data:product});
        } catch (error) {
            res.status(500).json({status:'error',message:`Se ha producido un error: ${error.message}`});
            console.log(`Se ha producido un error: ${error.message}`);
        }
    }


    static updateProduct = async (req,res)=>{
        const pid = req.params.pid;
        const data = req.body;
        try {
            //const pManager = new ProductManager();
            const productUpdated = await pManager.updateOne(pid,data);
            res.status(200).json({status:'success',data:productUpdated});
        } catch (error) {
            res.status(500).json({status:'error',message:`Se ha producido un error: ${error.message}`});
            console.log(`Se ha producido un error: ${error.message}`);
        }
    }

    static deleteProduct = async (req,res)=>{
        const pid = req.params.pid;
        try {
           // const pManager = new ProductManager();
            const productDeleted = await pManager.deleteOne(pid);
            res.status(200).json({status:'success',data:productDeleted});
        } catch (error) {
            res.status(500).json({status:'error',message:`Se ha producido un error: ${error.message}`});
            console.log(`Se ha producido un error: ${error.message}`);
        }
    }

}

export default ProductController;