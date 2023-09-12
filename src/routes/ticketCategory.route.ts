import { Router } from "express";
import TicketCategoryController from "../controllers/ticketCategory.controller";

class TicketCategoryRouter {
  public router: Router = Router();
  private controller: TicketCategoryController = new TicketCategoryController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new TicketCategoryRouter().router;
