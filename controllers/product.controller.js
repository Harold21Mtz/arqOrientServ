import {getAllProducts, getProductById, postProduct, putProduct, deleteProduct} from "../models/product.model.js";

export const getAll = async (req, res) => {
    console.log('Get all products');
    let data = await getAllProducts();
    res.status(200).json(data);
}

export const getProductId = async (req, res) => {
    console.log('Get product by id');
    let {id} = req.params;
    let data = await getProductById(id);
    res.status(data.status).json(data.data);
}

export const createProduct = async (req, res) => {
    console.log('Create a new product');
    let dataProductCreate = req.body;
    let data = await postProduct(dataProductCreate);
    res.status(data.status).json(data.data);
}

export const updateProduct = async (req, res) => {
    console.log('Update a product by id');
    let {id} = req.params;
    let dataProductUpdate = req.body;
    let data = await putProduct(id, dataProductUpdate);
    res.status(data.status).json(data.data);
}

export const deleProduct = async (req, res) => {
    console.log('Delete a product by id');
    let {id} = req.params;
    let data = await deleteProduct(id);
    res.status(data.status).json(data);
}