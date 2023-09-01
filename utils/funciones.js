import { validarToken } from "../config/jwt.js";

export async function traerUserLogin(req){    
    let tokenUser = req.headers['authorization'].slice(7);
    let user = await validarToken(tokenUser);
    return user;
}