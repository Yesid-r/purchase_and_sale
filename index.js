import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import authRouter from './routes/auth.js'
import customerRouter from './routes/customer.js'

const app = express()
dotenv.config()

const corsOptions = {
    origin: true,
    credentials: true
}

const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors(corsOptions))
app.use('/auth', authRouter)
app.use('/customer', customerRouter)
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
        
    } catch (error) {
        console.log(error.message);
    }
}
connect()


app.listen(port, ()=>{
    console.log(`server listen on port: ${port}`)
})