import { Router } from "express";
import ProjectController from "../controllers/project.controller";

class ProjectRouter {
  public router: Router = Router();
  private controller: ProjectController = new ProjectController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new ProjectRouter().router;
