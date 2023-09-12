import { Router } from "express";
import TicketCommentController from "../controllers/ticketComment.controller";

class TicketCommentRouter {
  public router: Router = Router();
  private controller: TicketCommentController = new TicketCommentController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new TicketCommentRouter().router;
