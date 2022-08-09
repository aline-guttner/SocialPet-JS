import dotenv from "dotenv-safe"
import express from "express"
import database from "./config/database.js"; 
import authRouter from "./Routes/authRouter.js"
import postRoutes from "./Routes/postRoutes.js"
import cors from 'cors';

const app = express();

app.options('*', cors()) // include before other routes

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept")   
    app.use(cors());
    next();
});

dotenv.config();

database.on('error', (error) => console.error(error)); //alterado
database.on('open', () => console.log('Connected to database')); //alterado

app.use(express.json());//alterado
// CAMINHO RAIZ DA REQUEST  

app.use("/auth", authRouter)

app.use('/posts', postRoutes)

export default app;