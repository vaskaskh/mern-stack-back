import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './utils/db.js';
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';








dotenv.config();

connectDB();


const app = express();


app.use(express.json())




//ROUTES

app.use("/api/v1/",productRoutes)

app.use("/api/v1/",userRoutes)


app.use("/api/v1/",authRoutes)




//SERVER
const PORT = process.env.PORT || 5500;


app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`.underline)
})



