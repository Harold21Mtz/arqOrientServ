import { getProductModel, getProductUnicoModel, postProductUnico } from "../models/product.model.js";

export const getProduct = async(req, res)=>{
    let msg = await getProductModel();
    res.status(200).json({success: true, msg: msg});
}

export const postProduct = async (req, res)=>{
    let {name, detail, value, img} = req.body;
    let data = await postProductUnico(name, detail, value, img);
    res.status(200).json({success: true, data : data});
}

export const getProductUnico = async(req, res)=>{
    try {
        let {id} = req.params;
        let data = await getProductUnicoModel(id);
        res.status(200).json({success: true, data: data});
    } catch (error) {
        res.status(200).json({success: true, data: "no hay datos: " + error});
    }
   
}