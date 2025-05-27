import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
dotenv.config()
import productsRoutes from './routes/products.js'
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use("/api/products",productsRoutes)
// console.log(process.env.MONGO_URI)


app.listen(PORT,()=>{
    connectDB()
    console.log("server started in backend")
})

// 7aFdCSJmFaX9nglu