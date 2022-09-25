import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/product.js';



const router = express.Router();



router.post('/product/create',  createProduct)

//Update
router.put('/product/update/:id', updateProduct)

//Delete

router.delete('/product/delete/:id',  deleteProduct)

//Get By ID
router.get('/product/:id', getProductById)

//Get All
router.get('/products',getAllProducts )



export default router;