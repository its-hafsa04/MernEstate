/*import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("server connected to mongodb");
}).catch((err)=>{
    console.log(err)}
    );

const app = express();

app.listen(3000 ,() =>{
    console.log("server is running on port 3000");
})*/
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Load environment variables from .env file
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("server connected to mongodb");
}).catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
