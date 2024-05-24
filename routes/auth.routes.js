import {Router} from "express";
import {createUser, login} from "../controllers/auth.controller.js";
import {validate} from "../middleware/validator.middleware.js";
import {postUserValidator} from "../validations/user.validator.js";

const routeAuth = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Inicia sesión con las credenciales proporcionadas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario autenticado correctamente
 *       401:
 *         description: Credenciales incorrectas
 */
routeAuth.post('/login', login);

/**
 * @swagger
 * /auth/create:
 *   post:
 *     summary: Crear usuario
 *     description: Crea un nuevo usuario con la información proporcionada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       409:
 *         description: El usuario ya existe
 */
routeAuth.post('/create', validate(postUserValidator), createUser);

export default routeAuth;