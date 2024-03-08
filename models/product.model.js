import pgService from "../services/pg.service.js";

export const getProductModel = async() =>{
    const pg = new pgService();
    return await pg.connection.query("SELECT * FROM PRODUCT");
}

export async function getProductUnicoModel(id){
    const pg = new pgService();
    return await pg.connection.oneOrNone("SELECT * FROM PRODUCT WHERE ID_PRODUCT = $1", [id]);
}