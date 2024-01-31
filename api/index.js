import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("server connected to mongodb");
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
