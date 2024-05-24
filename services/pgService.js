import pgPromise from "pg-promise";
import { env } from "../config/default.js";

export default class PgService {
    static instance;

    constructor(){
        
        if(PgService.instance){
            return PgService.instance;
        }

        PgService.instance = this;
        
        const pgp = pgPromise({});
        this.connection = pgp(env.postgres)
        this.connection.connect()
        .then(obj=>{
            console.log("base de datos conectada: " + obj.client.serverVersion);
            obj.done()
        })
        .catch(er =>{
            console.log("Error ", er.message || er);
        })
    }
}