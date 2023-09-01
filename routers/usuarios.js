import { Router } from "express";
import { traerUserLogin } from "../utils/funciones.js"
import passportHelper from "../config/passportHelpert.js";

const appUsuarios = Router();

appUsuarios.use(passportHelper.authenticate('bearer', {session: false}));

appUsuarios.get("/", async(req,res)=>{
    let user = await traerUserLogin(req);
    let {_id,activo,role,permisos, ...data} = user;
    res.status(200).send({status: 200,message: data})
})

export {
    appUsuarios
}