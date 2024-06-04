import {Router} from "express";
import {verifyToken} from "./token.middleware.js";


const middle = Router();

middle.use('/product', verifyToken)
middle.use('/category', verifyToken)
middle.use('/user', verifyToken)

export default middle;