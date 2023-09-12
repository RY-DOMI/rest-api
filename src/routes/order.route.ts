import { Router } from "express";
import OrderController from "../controllers/order.controller";

class OrderRouter {
  public router: Router = Router();
  private controller: OrderController = new OrderController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new OrderRouter().router;
