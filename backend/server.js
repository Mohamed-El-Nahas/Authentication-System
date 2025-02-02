import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 5000
connectDB();

const allowedOrigins = [
    'http://localhost:5173', // Local development
    'https://authentication-system-front-end.vercel.app' // Production
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins ,credentials: true}));


// API END-POINTS
app.get('/', (req, res) => res.send("SERVER RUNING AT PORT - 5000"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)


app.listen(port, () => console.log(`Server runing at port : ${port}`));

// mongodb.auth@outlook.com
