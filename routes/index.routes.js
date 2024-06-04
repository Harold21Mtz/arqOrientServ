import {Router} from "express";
import routeProduct from "./product.router.js";
import routeCategory from "./category.router.js";
import routeUser from "./user.router.js";
import routeAuth from "./auth.routes.js";

const router = Router();

router.use('/product', routeProduct);
router.use('/category', routeCategory);
router.use('/auth', routeAuth);
router.use('/user', routeUser);

export default router;