import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from "./routes/product.js";
const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json()); //middleware allows us to accept json data in the req.body
app.use("/api/products", productRoutes); // this must be below express.json()

const localhost = "http://localhost:5000";
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at ${PORT}`);
});
