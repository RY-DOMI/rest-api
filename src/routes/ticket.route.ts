import { Router } from "express";
import TicketController from "../controllers/ticket.controller";

class TicketRouter {
  public router: Router = Router();
  private controller: TicketController = new TicketController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new TicketRouter().router;
