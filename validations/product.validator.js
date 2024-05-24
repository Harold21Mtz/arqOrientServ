import {checkSchema} from "express-validator";

export const postProductValidator = checkSchema({
    name: {
        in: ['body'],
        errorMessage: 'Nombre no valido',
        notEmpty: {
            errorMessage: 'El nombre no puede estar vacío',
        },
        matches: {
            options: [/^[a-zA-ZñÑ\s]+$/],
            errorMessage: 'El nombre debe contener solo letras',
        },
        isLength: {
            options: { min: 1, max: 50 },
            errorMessage: 'El nombre debe tener entre 1 y 50 caracteres',
        },
    },
    detail: {
        in: ['body'],
        errorMessage: 'Detalle no valido',
        notEmpty: {
            errorMessage: 'El detalle no puede estar vacío',
        },
        matches: {
            options: [/^[a-zA-ZñÑ\s]+$/],
            errorMessage: 'El detalle debe contener solo letras',
        },
        isLength: {
            options: { min: 1, max: 200 },
            errorMessage: 'El detalle debe tener entre 1 y 200 caracteres',
        },
    },
    value: {
        in: ['body'],
        errorMessage: 'Valor no válido',
        notEmpty: {
            errorMessage: 'El valor no puede estar vacío',
        },
        isNumeric: {
            errorMessage: 'El valor debe ser solo números y tener al menos un dígito',
        },
    },
    img: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'La imagen no puede estar vacía',
        },
        custom: {
            options: (value) => {
                const urls = value.split(',');
                const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
                for (const url of urls) {
                    if (!urlPattern.test(url.trim())) {
                        throw new Error('Cada imagen debe ser una URL válida');
                    }
                }
                return true;
            },
            errorMessage: 'La imagen debe ser una URL válida separada por comas',
        },
    },
});