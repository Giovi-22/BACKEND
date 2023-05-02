import mongoose from "mongoose";

const cartCollection = 'carts';

const cartSchema = new mongoose.Schema({
    "products": {type:Array,require:true},
    "status":{type:Boolean,require:true}
})

export const cartModel = mongoose.model(cartCollection,cartSchema);