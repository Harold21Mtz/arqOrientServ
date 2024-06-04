import {Router} from "express";
import {getUserSession} from "../controllers/auth.controller.js";

const routeUser = Router();

/**
 * @swagger
 * /user/userSession:
 *   get:
 *     summary: Extract user session
 *     description: Verifica el token y extraemos la data del usuario
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 */
routeUser.get('/userSession', getUserSession);


export default routeUser;