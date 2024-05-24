import {Router} from "express";
import {getAll, getProductId, createProduct, updateProduct, deleProduct} from "../controllers/product.controller.js";
import {validate} from "../middleware/validator.middleware.js";
import {postProductValidator} from "../validations/product.validator.js";

const routeProduct = Router();

/**
 * @swagger
 * /product/all:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Retorna todos los productos disponibles
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente
 */
routeProduct.get("/all", getAll);

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Obtiene un producto por su id
 *     description: Retorna un producto específico según su id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id del producto
 *         required: true
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Producto encontrado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
routeProduct.get("/:id", getProductId);

/**
 * @swagger
 * /product:
 *   post:
 *     summary: Crea un nuevo producto
 *     description: Crea un nuevo producto con la información proporcionada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *       409:
 *         description: El producto ya existe
 */
routeProduct.post("/", validate(postProductValidator), createProduct);

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     summary: Actualiza un producto por su id
 *     description: Actualiza un producto existente según su id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id del producto
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       204:
 *         description: Producto actualizado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
routeProduct.put("/:id", validate(postProductValidator), updateProduct);

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Elimina un producto por su id
 *     description: Elimina un producto existente según su id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: id del producto
 *         required: true
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       204:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
routeProduct.delete("/:id", deleProduct);

export default routeProduct;