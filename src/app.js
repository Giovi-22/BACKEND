import express  from 'express';

import dotenv from 'dotenv';
import mongoose from 'mongoose';

import pRouter from './routes/productRouter.js';

dotenv.config();
const port = process.env.PORT;


void (async ()=>
{
    await mongoose.connect(process.env.ECOMMERCEDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
      
    app.use('/api/products/',pRouter);
      
      
    app.listen(port,()=>console.log(`Servidor escuchando en el puerto ${port}`));


})();