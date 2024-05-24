import express from 'express';
import { env } from './default.js';
import router from '../routes/index.routes.js';
import pgService from '../services/pg.service.js';
import middle from '../middleware/index.middleware.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig.js';

export default class Server {
    constructor() {
        this.app = express();
        this.port = env.port;
    }

    conectionDB() {
        new pgService();
    }

    middlewares() {
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
        this.conectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}
