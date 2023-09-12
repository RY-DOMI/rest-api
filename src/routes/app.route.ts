import { Router } from "express";
import AppController from "../controllers/app.controller";

class AppRouter {
  public router: Router = Router();
  private controller: AppController = new AppController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new AppRouter().router;
