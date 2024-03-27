import pgService from "../services/pg.service.js";

export const getAllProducts = async() =>{
    try {
        const pg = new pgService();
        return await pg.connection.query(
            "SELECT * FROM PRODUCT"
        )
    } catch (error) {
        return 'Internal Server Error, ' + error;
    }
}

export async function getProductById(id){
    try {
        const pg = new pgService();
        const product = await pg.connection.oneOrNone("SELECT * FROM PRODUCT WHERE id_product = $1", [id]);
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

        const saveProduct = await pg.connection.query("INSERT INTO PRODUCT(name, detail, value, img) VALUES ($1, $2, $3, $4) RETURNING *", [dataProductCreate.name, dataProductCreate.detail, dataProductCreate.value, dataProductCreate.img]);
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

        const updateProduct = await pg.connection.query("UPDATE PRODUCT SET name = $1, detail = $2, value = $3, img = $4 WHERE id_product = $5", [dataProductUpdate.name, dataProductUpdate.detail, dataProductUpdate.value, dataProductUpdate.img, id]);
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
