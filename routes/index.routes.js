import { Router} from "express";
import routeProduct from "./product.router.js";
import routeAuth from "./auth.routes.js";

const router = Router();

router.use('/product', routeProduct);
router.use('/auth', routeAuth);

export default router;