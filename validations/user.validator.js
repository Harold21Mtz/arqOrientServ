import {checkSchema} from "express-validator";

export const postUserValidator = checkSchema(
    {
        username: {
            errorMessage: 'Nombre de usuario no valido',
            notEmpty: true,
            isLength: {
                options: {min: 5, max: 15},
                errorMessage: 'El nombre de usuario debe tener entre 5 y 15 caracteres'
            }
        },
        password: {
            errorMessage: 'Contraseña no valida',
            notEmpty: true,
            isLength: {
                options: {min: 5, max: 20},
                errorMessage: 'La contraseña debe tener entre 5 y 20 caracteres'
            }
        }
    }["body"])