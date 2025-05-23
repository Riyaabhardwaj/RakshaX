import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import errorHandler from "./middlewares/errorHandler.middleware.js"

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

import userRouter from './routes/user.route.js'
import mlRouter from './routes/ml.route.js'

app.use("/api/user", userRouter)
app.use("/api/ml", mlRouter)


app.use(errorHandler)

export default app