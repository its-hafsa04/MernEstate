import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("server connected to mongodb");
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

//middleware
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    return res.status(statusCode).json({
success: false,
statusCode,
message,
    })
})