import {checkSchema} from "express-validator";

export const postUserValidator = checkSchema(
    {
        username: {
            in: ['body'],
            errorMessage: 'Nombre de usuario no valido',
            notEmpty: true,
            isLength: {
                options: {min: 5, max: 15},
                errorMessage: 'El nombre de usuario debe tener entre 5 y 15 caracteres'
            }
        },
        email: {
            in: ['body'],
            errorMessage: 'Email no valido',
            notEmpty: true,
            isLength: {
                options: {min: 5, max: 25},
                errorMessage: 'El nombre de usuario debe tener entre 5 y 25 caracteres'
            },
            isEmail: {
                errorMessage: 'El email debe ser una dirección válida',
            },
        },
        password: {
            in: ['body'],
            errorMessage: 'Contraseña no valida',
            notEmpty: true,
            isLength: {
                options: {min: 5, max: 20},
                errorMessage: 'La contraseña debe tener entre 5 y 20 caracteres'
            }
        },
        avatar: {
            in: ['body'],
            optional: true,
            errorMessage: 'El avatar debe ser una URL válida',
            isURL: {
                errorMessage: 'El avatar debe ser una URL válida',
            },
        },
    });