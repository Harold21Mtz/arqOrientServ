import PgService from "../services/pgService.js";

export const getAllProducts = async() =>{
    try {
        const pg = new PgService();
        return await pg.connection.query(
            "SELECT p.id_product, p.name as name_product, p.description, p.price, p.stock, p.img, c.id_category, c.name as name_category FROM PRODUCT p INNER JOIN CATEGORY c on p.category_id = c.id_category"
        )
    } catch (error) {
        return 'Internal Server Error, ' + error;
    }
}

export const getAllCategories = async() =>{
    try {
        const pg = new PgService();
        return await pg.connection.query(
            "SELECT * FROM CATEGORY"
        )
    } catch (error) {
        return 'Internal Server Error, ' + error;
    }
}

export async function getProductById(id){
    try {
        const pg = new PgService();
        const product = await pg.connection.oneOrNone("SELECT p.id_product, p.name as name_product, p.description, p.price, p.stock, p.img, c.id_category, c.name as name_category FROM PRODUCT p INNER JOIN CATEGORY c on p.category_id = c.id_category WHERE id_product = $1", [id]);
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
        const pg = new PgService();

        const productExists = await pg.connection.query("SELECT * FROM PRODUCT WHERE LOWER(name) = $1", [dataProductCreate.name.toLowerCase()]);

        if(productExists[0]){
            return { data: "The product could not be added because it already exists", status: 409}
        }

        const saveProduct = await pg.connection.query("INSERT INTO PRODUCT(name, description, price, stock, img, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [dataProductCreate.name, dataProductCreate.description, dataProductCreate.price, dataProductCreate.stock, dataProductCreate.img, dataProductCreate.id_category]);
        return {data: saveProduct, status: 201}

    }catch (error){
        console.log(error);
        return {data: 'Error Internal Server', status: 500}
    }
}

export async function putProduct(id, dataProductUpdate){
    try{
        const pg = new PgService();

        const productExists = await pg.connection.query("SELECT * FROM PRODUCT WHERE id_product = $1", [id]);

        if(!productExists[0]){
            return { data: "The product cannot be updated because it does not exist", status: 404}
        }

        const productExistsWithName = await pg.connection.query("SELECT * FROM PRODUCT WHERE LOWER(name) = $1", [dataProductUpdate.name.toLowerCase()]);

        if(productExistsWithName[1]){
            return { data: "The product cannot be updated because a product already exists registered with the same name.", status: 409}
        }

        const updateProduct = await pg.connection.query("UPDATE PRODUCT SET name = $1, description = $2, price = $3, stock = $4, img = $5, category_id = $6 WHERE id_product = $7", [dataProductUpdate.name, dataProductUpdate.description, dataProductUpdate.price, dataProductUpdate.stock, dataProductUpdate.img, dataProductUpdate.id_category, id]);
        return {data: updateProduct, status: 204}

    }catch (error){
        console.log(error);
        return {data: 'Error Internal Server', status: 500}
    }
}

export async function deleteProduct(id){
    try {
        const pg = new PgService();
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
