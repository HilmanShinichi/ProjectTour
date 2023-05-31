import express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// panggil routes untuk fungsi callback
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';

dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true
}

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
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);



app.listen(port, ()=> {
    connect()
    console.log('server listening on port', port)
})