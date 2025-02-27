import express from 'express';
import cookieParser from 'cookie-parser';
import dbConnect from "./utils/dbConnect.util.js"
import addLogger from "./utils/logger.js";
import envUtil from "./utils/env.util.js"

import pathHandler from "./middlewares/pathHandler.mid.js"
import errorHandler from "./middlewares/errorHandler.mid.js"

import indexRouter from "./routers/index.router.js"


const app = express();
const PORT = process.env.PORT||8080;


const ready = () => {
    console.log("Server ready on port: ",PORT);
    dbConnect()
    console.log("mongodb connected");
}

app.listen(PORT, ready)

// paquete de rutas-endpoints estatico;
app.use('/static', express.static('public'))

// middlewares
app.use(addLogger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(morgan("dev"))
app.use(cookieParser(envUtil.SECRET_KEY))

// Routes
app.use(indexRouter)

// Middlewares
app.use(errorHandler)
app.use(pathHandler)