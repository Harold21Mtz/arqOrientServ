import PgService from "../services/pgService.js";
import {verifyToken} from "../services/token.service.js";

export const getUser = async (username, password) => {
    const pg = new PgService();
    return await pg.connection.oneOrNone('SELECT * FROM USUARIO WHERE username = $1 AND password = $2', [username.toLowerCase(), password]);
}

export const getUserByToken = async (token) => {
    try {
        const pg = new PgService();

        const data = verifyToken(token);

        const userData = await pg.connection.oneOrNone('SELECT u.id_user, u.username, u.email, u.avatar FROM USUARIO u WHERE username = $1', [data.username.toLowerCase()]);

        return {data: userData, status: 200}
    } catch (err) {
        return {data: err.message, status: 401}
    }

}

export const getUserEmailExists = async (dataEmail) => {
    const pg = new PgService();
    const emailExists = await pg.connection.query("SELECT * FROM USUARIO WHERE email = $1", [dataEmail.email.toLowerCase()]);

    if (emailExists[0]) {
        return {data: true, status: 409}
    }

    return {data: false, status: 200}
}

export const postUser = async (dataUserCreate) => {
    try {
        const pg = new PgService();

        const userExists = await pg.connection.query("SELECT * FROM USUARIO WHERE LOWER(username) = $1", [dataUserCreate.username.toLowerCase()]);

        if (userExists[0]) {
            return {data: "The user could not be added because it already exists", status: 409}
        }

        const saveUser = await pg.connection.query("INSERT INTO USUARIO(username, password, email, avatar) VALUES ($1, $2, $3, $4) RETURNING *", [dataUserCreate.username.toLowerCase(), dataUserCreate.password, dataUserCreate.email.toLowerCase(), dataUserCreate.avatar]);
        return {data: saveUser, status: 201}

    } catch (error) {
        console.log(error);
        return {data: 'Error Internal Server', status: 500}
    }
}