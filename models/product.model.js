import pgService from "../services/pg.service.js";

export const getAllProducts = async() =>{
    try {
        const pg = new pgService();
        return await pg.connection.query(
            "SELECT p.id_product, p.name as nameProduct, p.detail, p.value, p.img, c.id_category, c.name as nameCategory FROM PRODUCT p INNER JOIN CATEGORY c on p.category_id = c.id_category"
        )
    } catch (error) {
        return 'Internal Server Error, ' + error;
    }
}

export async function getProductById(id){
    try {
        const pg = new pgService();
        const product = await pg.connection.oneOrNone("SELECT p.id_product, p.name as nameProduct, p.detail, p.value, p.img, c.id_category, c.name as nameCategory FROM PRODUCT p INNER JOIN CATEGORY c on p.category_id = c.id_category WHERE id_product = $1", [id]);
        if(!product) {
            return { data: "Product Not Found", status: 404}
        }
        return { data: product, status: 200 }
    }catch (error){
        console.log(error);
        return {data: 'Internal Server Error', status: 500}
    }
}

export async function postProduct(dataProductCreate){
    try{
        const pg = new pgService();

        const productExists = await pg.connection.query("SELECT * FROM PRODUCT WHERE name = $1", [dataProductCreate.name]);

        if(productExists[0]){
            return { data: "The product could not be added because it already exists", status: 409}
        }

        const saveProduct = await pg.connection.query("INSERT INTO PRODUCT(name, detail, value, img, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", [dataProductCreate.name, dataProductCreate.detail, dataProductCreate.value, dataProductCreate.img, dataProductCreate.category_id]);
        return {data: saveProduct, status: 201}

    }catch (error){
        console.log(error);
        return {data: 'Error Internal Server', status: 500}
    }
}

export async function putProduct(id, dataProductUpdate){
    try{
        const pg = new pgService();

        const productExists = await pg.connection.query("SELECT * FROM PRODUCT WHERE id_product = $1", [id]);

        if(!productExists[0]){
            return { data: "The product cannot be updated because it does not exist", status: 404}
        }

        const productExistsWithName = await pg.connection.query("SELECT * FROM PRODUCT WHERE name = $1", [dataProductUpdate.name]);

        if(productExistsWithName[0]){
            return { data: "The product cannot be updated because a product already exists registered with the same name.", status: 409}
        }

        const updateProduct = await pg.connection.query("UPDATE PRODUCT SET name = $1, detail = $2, value = $3, img = $4, category_id = $5 WHERE id_product = $6", [dataProductUpdate.name, dataProductUpdate.detail, dataProductUpdate.value, dataProductUpdate.img, dataProductUpdate.category_id, id]);
        return {data: updateProduct, status: 204}

    }catch (error){
        console.log(error);
        return {data: 'Error Internal Server', status: 500}
    }
}

export async function deleteProduct(id){
    try {
        const pg = new pgService();
        const product = await pg.connection.oneOrNone("SELECT * FROM PRODUCT WHERE ID_PRODUCT = $1", [id]);
        if(!product) {
            return { data: "Product Not Found", status: 404}
        }
        const deleteProduct = await pg.connection.query("DELETE FROM PRODUCT WHERE id_product = $1", [id]);
        return {data: deleteProduct, status: 204}
    }catch (error){
        console.log(error);
        return {data: 'Internal Server Error', status: 500}
    }

}
