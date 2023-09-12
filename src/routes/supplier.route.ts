import { Router } from "express";
import SupplierController from "../controllers/supplier.controller";

class SupplierRouter {
  public router: Router = Router();
  private controller: SupplierController = new SupplierController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new SupplierRouter().router;
