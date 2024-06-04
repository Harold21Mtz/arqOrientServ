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
    description: {
        in: ['body'],
        errorMessage: 'Descripción no válida',
        notEmpty: {
            errorMessage: 'La descripción no puede estar vacía',
        },
        matches: {
            options: [/^[a-zA-ZñÑ\s]+$/],
            errorMessage: 'La descripción debe contener solo letras',
        },
        isLength: {
            options: { min: 5, max: 200 },
            errorMessage: 'La descripción debe tener entre 5 y 200 caracteres',
        },
    },
    price: {
        in: ['body'],
        errorMessage: 'Precio no válido',
        notEmpty: {
            errorMessage: 'El precio no puede estar vacío',
        },
        isNumeric: {
            errorMessage: 'El precio debe ser solo números y tener al menos un dígito',
        },
    },
    stock: {
        in: ['body'],
        errorMessage: 'Stock no válido',
        notEmpty: {
            errorMessage: 'El Stock no puede estar vacío',
        },
        isNumeric: {
            errorMessage: 'El Stock debe ser solo números y tener al menos un dígito',
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