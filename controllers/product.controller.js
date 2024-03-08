import { getProductModel, getProductUnicoModel } from "../models/product.model.js";

export const getProduct = async(req, res)=>{
    let msg = await getProductModel();
    res.status(200).json({success: true, msg: msg});
}

export const postProduct = (req, res)=>{
    res.status(200).json({success: true});
}

export const getProductUnico = async(req, res)=>{
    try {
        let {id} = req.params;
        console.log(id);
        let data = await getProductUnicoModel(id);
        res.status(200).json({success: true, data: data});
    } catch (error) {
        res.status(200).json({success: true, data: "no hay datos" + error});
    }
   
}