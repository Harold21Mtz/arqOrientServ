import {checkSchema} from "express-validator";

export const postProductValidator = checkSchema({
    name: {
        errorMessage: 'Nombre no valido',
        notEmpty: true,
        matches: {
            options: [/^[a-zA-ZñÑ\s]+$/],
            errorMessage: 'El nombre debe contener solo letras'
        },
        isLength: {
            options: {min: 1, max: 50},
            errorMessage: 'El nombre debe tener entre 1 y 50 caracteres'
        }
    },
    detail: {
        errorMessage: 'Detalle no valido',
        notEmpty: true,
        matches: {
            options: [/^[a-zA-ZñÑ\s]+$/],
            errorMessage: 'El detalle debe contener solo letras'
        },
        isLength: {
            options: {min: 1, max: 100},
            errorMessage: 'El detalle debe tener entre 1 y 100 caracteres'
        }
    },
    value: {
        matches: {options: /^[0-9]+$/},
        errorMessage: 'El valor debe ser solo números y tener al menos un dígito'
    }
}, ["body"])