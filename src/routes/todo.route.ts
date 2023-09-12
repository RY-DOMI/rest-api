import { Router } from "express";
import TodoController from "../controllers/todo.controller";

class TodoRouter {
  public router: Router = Router();
  private controller: TodoController = new TodoController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new TodoRouter().router;
