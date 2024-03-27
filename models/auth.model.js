import pgService from "../services/pg.service.js";

export const getUser = async (username, password) => {
    const pg = new pgService();
    return await pg.connection.oneOrNone('SELECT * FROM USUARIO WHERE username = $1 AND password = $2', [username, password]);
}