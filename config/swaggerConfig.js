import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Mi API',
        version: '1.0.0',
        description: 'API para la materia arquitectura orientada a servicios',
    },
    servers: [
        {
            url: 'http://localhost:8000',
            description: 'Servidor de desarrollo',
        },
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        schemas: {
            User: {
                type: 'object',
                properties: {
                    username: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                    email: {
                        type: 'string',
                    },
                    avatar: {
                        type: 'string',
                    },
                },
            },
            Product: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                    },
                    detail: {
                        type: 'string',
                    },
                    value: {
                        type: 'number',
                    },
                    img: {
                        type: 'string',
                    },
                    category_id: {
                        type: 'numeric',
                    },
                },
            },
            Token: {
                type: 'string',
                description: 'JWT token',
            },
        },
    },
    security: [
        {
            BearerAuth: [],
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Cambia esto según la ubicación de tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
