import { checkSchema } from "express-validator";

export const postProductValidator = checkSchema({
    nombre:{
        errorMessage: 'Nombre no valido',notEmpty: true,isLength:{
            options: {min: 1},
            errorMessage: 'El nombre debe ser minimo de una letra'
        }   
     },
    detalle:{
        errorMessage: 'Detalle no valido',
        notEmpty: true,
        isLength:{
            options: {min: 5},
            errorMessage: 'El nombre debe ser minimo de cinco letra'
        }    
    },
    valor:{
        matches: { options: /^[0-9]+$/ },
        errorMessage: 'El valor debe ser solo numeros'

    }
}, ["body"])