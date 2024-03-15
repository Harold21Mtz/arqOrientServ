import { env } from "../config/default.js";

export const verifyToken = (req, res, next) =>{
    let token = req.headers["authorization"]

    if(!token){
        return res.status(401).json({
            msg: 'Authorization required'
        })
    }

    console.log(token);

    token = token.split(" ");
    if(token[0] !== 'Bearer'){
        return res.status(401).json({
            msg: 'Authorization required'
        })
    }

    jwt.verify(token[1], env.secretkey, (err, decoded)=>{
        if(err){
            return res.status(401).json({
                msg: 'Authorization required'
            })
        }
        next();
    });
}