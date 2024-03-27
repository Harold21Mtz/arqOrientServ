import {Router} from "express";
import {verifyToken} from "./token.middleware.js";


const middle = Router();

middle.use('/product', verifyToken)

export default middle;