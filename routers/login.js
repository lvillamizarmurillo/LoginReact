import {createToken} from '../config/jwt.js'
import { Router } from 'express';

const appLogin = Router();

appLogin.use(createToken);
 
appLogin.post('/', (req,res)=>{
    res.status(req.data.status).send(req.data);
});
export {
    appLogin
};