import express from 'express';
import cors from 'cors';
import { register } from './routes/routes.js';
import connectDB from './connectDB.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

app.post('/register', register)

app.listen(7777, () => {
    connectDB()
    console.log("Server is running on port 7777") 
}) 