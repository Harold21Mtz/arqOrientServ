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
            url: 'http://localhost:8010',
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
                    description: {
                        type: 'string',
                    },
                    price: {
                        type: 'number',
                    },
                    stock: {
                        type: 'number',
                    },
                    img: {
                        type: 'string',
                    },
                   id_category: {
                        type: 'number',
                    },
                },
            },
            Category:{
                name: {
                    type: 'string',
                },
                description: {
                    type: 'string',
                },
                img: {
                    type: 'string',
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
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
