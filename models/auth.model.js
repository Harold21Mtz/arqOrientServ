import pgService from "../services/pg.service.js";

export const getUsuario = async(usuario, password) =>{
    const pg = new pgService();
    return await pg.connection.oneOrNone("SELECT * FROM USUARIO WHERE USERNAME = $1 AND PASSWORD = $2", [usuario, password]);
}

export const get = async () =>{

}