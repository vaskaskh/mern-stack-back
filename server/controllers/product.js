import Product from '../models/Product.js';



export const createProduct = async(req,res)=>{

    
    const product = new Product(req.body)
    try {

        const savedProduct = await product.save();


        res.status(200).json(savedProduct);


    } catch (error) {
        
        res.status(500).json(error)
    }
}


export const getAllProducts = async(req,res)=>{
    try {
            const products  = await Product.find({});


            res.status(200).json(products);


    } catch (error) {
        res.status(404).json({
            message:"Product not found!"
        });
    }
}


export const getProductById = async(req,res)=>{
    try {
        const product  = await Product.findById(req.params.id);


        res.status(200).json(product);


} catch (error) {
    res.status(404).json({
        message:"Product not found!"
    });
}
}

export const updateProduct = async(req,res)=>{

    try {

        const updatedProduct = await Product.findOneAndUpdate(req.params.id, {$set: req.body},{
            new: true
        })        

        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json(error);
    }


}

export const deleteProduct = async(req,res)=>{
    try {

         await Product.findOneAndDelete(req.params.id)      

         res.status(200).json("Product  Deleted Successfully")

    } catch (error) {
        res.status(500).json(error);
    }
}






