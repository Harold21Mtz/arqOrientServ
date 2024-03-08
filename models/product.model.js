import pgService from "../services/pg.service.js";

export const getProductModel = async() =>{
    const pg = new pgService();
    return await pg.connection.query("SELECT * FROM PRODUCT");
}

export async function getProductUnicoModel(id){
    const pg = new pgService();
    return await pg.connection.oneOrNone("SELECT * FROM PRODUCT WHERE ID_PRODUCT = $1", [id]);
}

export async function postProductUnico(name, detail, value, img){
    const pg = new pgService();
    return await pg.connection.query("INSERT INTO PRODUCT(name, detail, value, img) VALUES ($1, $2, $3, $4) RETURNING *", [name, detail, value, img]);
}