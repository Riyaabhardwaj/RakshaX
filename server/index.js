import app from "./app.js"
import dotenv from "dotenv"
import connectDB from "./db/db.js"

dotenv.config({
    path: '../.env'
})

connectDB()
    .then(() => {
        const server = app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is working on http://localhost:${process.env.PORT}`);
        });
    }).catch((error) => {
        console.log("MongoDB connection failed!!", error);
    })