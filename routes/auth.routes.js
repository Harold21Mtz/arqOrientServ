import {Router} from "express";
import {createUser, getEmailExists, login} from "../controllers/auth.controller.js";
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

/**
 * @swagger
 * /auth/existsEmail:
 *   post:
 *     summary: Exists email
 *     description: Verifica la existencia del correo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: No exists
 *       409:
 *         description: Exists
 */
routeAuth.post('/existsEmail', getEmailExists);

export default routeAuth;