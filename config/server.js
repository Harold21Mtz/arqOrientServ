import express from 'express';
import { env } from './default.js';
import router from '../routes/index.routes.js';
import PgService from '../services/pgService.js';
import middle from '../middleware/index.middleware.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig.js';
import cors from "cors"

const corsOptions = {
    origin: 'http://localhost:4210, http://localhost:8010/api-docs/**',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

// origin: 'http://localhost:4200',

export default class Server {
    constructor() {
        this.app = express();
        this.port = env.port;
    }

    connectionDB() {
        new PgService();
    }

    middlewares() {
        this.app.use(cors(corsOptions))
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(middle);

        // Servir la documentación de Swagger
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    routes() {
        this.app.use(router);
    }

    runServer() {
        this.app.listen(this.port, () => {
            console.log(`Inicio del servidor nodejs en http://localhost:${this.port}`);
            console.log(`Documentación de la API disponible en http://localhost:${this.port}/api-docs`);
        });
    }

    load() {
        this.connectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}
