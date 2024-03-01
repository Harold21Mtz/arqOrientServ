import { Router} from "express";
import routeProduct from "./product.router.js";

const router = Router();

router.use('/product', routeProduct);

export default router;