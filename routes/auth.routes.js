import {Router} from "express";
import {login} from "../controllers/auth.controller.js";

const routeAuth = Router();

routeAuth.get('/', login);

export default routeAuth;