import PgService from "../services/pgService.js";

export const getUser = async (username, password) => {
    const pg = new PgService();
    return await pg.connection.oneOrNone('SELECT * FROM USUARIO WHERE username = $1 AND password = $2', [username, password]);
}

export const getUserEmailExists = async (dataEmail) => {
    const pg = new PgService();
    const emailExists = await pg.connection.query("SELECT * FROM USUARIO WHERE email = $1", [dataEmail.email]);

    console.log(emailExists)
    if(emailExists[0]){
        return { data: true, status: 409}
    }

    return {data: false, status: 200}
}

export const postUser = async (dataUserCreate) => {
    try{
        const pg = new PgService();

        const userExists = await pg.connection.query("SELECT * FROM USUARIO WHERE username = $1", [dataUserCreate.username]);

        if(userExists[0]){
            return { data: "The user could not be added because it already exists", status: 409}
        }

        const saveUser = await pg.connection.query("INSERT INTO USUARIO(username, password, email, avatar) VALUES ($1, $2, $3, $4) RETURNING *", [dataProductCreate.name, dataProductCreate.detail, dataProductCreate.value, dataProductCreate.img]);
        return {data: saveUser, status: 201}

    }catch (error){
        console.log(error);
        return {data: 'Error Internal Server', status: 500}
    }
}