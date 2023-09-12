import { Router } from "express";
import WarehouseController from "../controllers/warehouse.controller";

class WarehouseRouter {
  public router: Router = Router();
  private controller: WarehouseController = new WarehouseController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new WarehouseRouter().router;
