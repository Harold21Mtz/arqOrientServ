import { Router} from "express";
import { getProduct, getProductUnico, postProduct } from "../controllers/product.controller.js";

const routeProduct = Router();

routeProduct.get("/get", getProduct);
routeProduct.get("/post", postProduct);
routeProduct.get("/:id", getProductUnico);

export default routeProduct;