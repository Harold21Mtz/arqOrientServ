import {env} from "../config/default.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"]

    if (!token) {
        return res.status(401).json({
            msg: 'Authorization required'
        })
    }

    console.log(token);

    token = token.split(" ");
    if (token[0] !== 'Bearer') {
        return res.status(401).json({
            success: false,
            msg: 'Authorization required'
        })
    }

    jwt.verify(token[1], env.secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                msg: 'Authorization required',
                error: err
            })
        }
        next();
    });
}
