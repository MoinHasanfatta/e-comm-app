import express from 'express'
import Product from '../models/products.js'
const router = express.Router();
import mongoose from 'mongoose';
import { getProducts,createProduct,updatedProduct, deleteProduct} from '../controller/myProducts.js';

router.get("/", getProducts )

router.post("/", createProduct )

router.put("/:id", updatedProduct )


router.delete("/:id", deleteProduct )


export default router;