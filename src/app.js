import express  from 'express';

import dotenv from 'dotenv';
import mongoose from 'mongoose';

import pRouter from './routes/productRouter.js';
import { clientErrorHandler } from './middelwares/clientErrorHandler.js';
import { serverErrorHandler } from './middelwares/serverErrorHandler.js';

dotenv.config();
const port = process.env.PORT;


void (async ()=>
{
    try{
        
    
    await mongoose.connect(process.env.ECOMMERCEDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
      
    app.use('/api/products/',pRouter);
      
    app.use(clientErrorHandler);  
    app.use(serverErrorHandler);

    app.listen(port,()=>console.log(`Servidor escuchando en el puerto ${port}`));
    } catch (error) {
        console.log("Dentro de la funcion principal void");
        console.log(error.message);
    }

    

})();