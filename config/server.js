import bodyParser from "body-parser"
import express from "express";
import { env } from "./default.js";

export default class Server{
    constructor(){

    }
    
    conectionDB(){
        this.app = express();
        this.port = env.port;
    }

    middlewares(){
        // this.app.use(bodyParser.json());
        // this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routes(){

    }

    runServer(){
        this.app.listen(this.port, ()=>{
            console.log("Inicio del servidor nodejs");
        });
    }

    load(){
        this.conectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }


}