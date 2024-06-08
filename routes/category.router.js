import {Router} from "express";
import {
    getAllCat, getCategoriesWithProducts
} from "../controllers/product.controller.js";

const routeCategory = Router();

/**
 * @swagger
 * /category/all:
 *   get:
 *     summary: Obtiene todas las categorías
 *     description: Retorna todas las categorías disponibles
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorías obtenida exitosamente
 */
routeCategory.get("/all", getAllCat);

/**
 * @swagger
 * /category/allWithProducts:
 *   get:
 *     summary: Obtiene todas las categorías con al menos un producto
 *     description: Retorna todas las categorías disponibles con productos
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorías obtenida exitosamente
 */
routeCategory.get("/allWithProducts", getCategoriesWithProducts);

export default routeCategory;