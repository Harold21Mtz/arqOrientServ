import { Router} from "express";

const routeProduct = Router();

routeProduct.get("/", (req, res)=>{
    res.status(200).json({success: true})
});

export default routeProduct;