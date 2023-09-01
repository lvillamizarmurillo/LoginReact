import express from "express";
import dotenv from "dotenv";
import { appLogin } from "./routers/login.js";
import { appUsuarios } from "./routers/usuarios.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/login", appLogin)
app.use("/usuarios", appUsuarios)

const config = JSON.parse(process.env.CONECCION);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})