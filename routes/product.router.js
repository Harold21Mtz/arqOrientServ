import {Router} from "express";
import {getAll, getProductId, createProduct, updateProduct, deleProduct} from "../controllers/product.controller.js";
import {validate} from "../middleware/validator.middleware.js";
import {postProductValidator} from "../validations/product.validator.js";

const routeProduct = Router();

routeProduct.get("/all", getAll);
routeProduct.get("/:id", getProductId);
routeProduct.post("/", validate(postProductValidator), createProduct);
routeProduct.put("/:id", validate(postProductValidator), updateProduct);
routeProduct.delete("/:id", deleProduct);

export default routeProduct;