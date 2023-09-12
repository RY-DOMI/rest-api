import { Router } from "express";
import ProductController from "../controllers/product.controller";

class ProductRouter {
  public router: Router = Router();
  private controller: ProductController = new ProductController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new ProductRouter().router;
