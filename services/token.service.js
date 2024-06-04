import jwt from "jsonwebtoken";
import {env} from "../config/default.js";

export const generateToken = (data) => {
    return jwt.sign({
        data: data,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, env.secretKey);
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, env.secretKey);
        return decoded.data;
    } catch (error) {
        throw new Error("Token inválido");
    }
}