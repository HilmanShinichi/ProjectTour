import express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import tourRoute from './routes/tours.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

// 
app.get('/', (req, res )=> {
    res.send('bisa')
})

// data connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log('MongoDB database connected');
    } catch (err) {
        console.log('MongoDB database connection failed');
    }
};

// Midleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours', tourRoute);



app.listen(port, ()=> {
    connect()
    console.log('server listening on port', port)
})