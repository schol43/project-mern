import express from 'express';
import dotenv from 'dotenv';
/*import Product from './models/product.model.js';
import mongoose from 'mongoose'; */
import { connectDB } from './config/db.js';
 import productRoutes from './routes/product.route.js';
dotenv.config();
const app=express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


app.use("/api/products", productRoutes);
/*
app.get('/api/products',async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json({success:true, data:products});
    } catch (error) {
        console.error("Error in Get products:",error.message);
        res.status(500).json({success:false, message:error.message});
    }
});


app.post('/api/products', async(req,res)=>{

    const product = req.body;
     
     if(!product.name || !product.price || !product.image){
         return res.status(400).json({success:false, message:'Please fill all the fields'});
     }
     const newProduct = new Product(product);
      try {
          await newProduct.save();
          res.status(201).json({success:true, data:newProduct});
      } catch (error) {
        console.error("Error in Create product:",error.message);
          res.status(500).json({success:false, message:error.message});
      }

});

app.put('/api/products/:id', async(req,res)=>{
    const { id } = req.params;
    const product = req.body;
     
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false, message:'Invalid product ID'});
    }
      
      
     try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        if(!updatedProduct){
            return res.status(404).json({success:false, message:'Product not found'});
        }
        res.status(200).json({success:true, data:updatedProduct});
    } catch (error) {
        console.error("Error in Update product:",error.message);
        res.status(500).json({success:false, message:error.message});
    }

});

app.delete('/api/products/:id', async(req,res)=>{
    const { id } = req.params;
     
   try {
    const product = await Product.findByIdAndDelete(id);
    if(!product){
        return res.status(404).json({success:false, message:'Product not found'});
    }
    res.status(200).json({success:true, data:product,message:'Product deleted successfully'});
} catch (error) {
    console.error("Error in Delete product:",error.message);
    res.status(500).json({success:false, message:error.message});
}
    
}
);
*/
console.log(process.env.MONGO_URI);

app.listen(PORT,()=>{
    connectDB();
  console.log('Server is running on port http://localhost: '+PORT);
});


//o8mu9tIMTeTxofHf




