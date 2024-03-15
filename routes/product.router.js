import { Router} from "express";
import { getProduct, getProductUnico, postProduct } from "../controllers/product.controller.js";
import { validate } from "../middleware/validator.middleware.js";
import { postProductValidator } from "../validations/product.validator.js";

const routeProduct = Router();

routeProduct.get("/get", getProduct);
routeProduct.post("/post", postProduct);
routeProduct.get("/:id", validate(postProductValidator), getProductUnico);

export default routeProduct;