import { Router } from "express";
import DeliveryController from "../controllers/delivery.controller";

class DeliveryRouter {
  public router: Router = Router();
  private controller: DeliveryController = new DeliveryController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new DeliveryRouter().router;
