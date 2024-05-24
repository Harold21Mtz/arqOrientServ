import {Router} from "express";
import {
    getAllCat
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

export default routeCategory;