import { Router } from "express";
import DepartmentController from "../controllers/department.controller";

class DepartmentRouter {
  public router: Router = Router();
  private controller: DepartmentController = new DepartmentController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new DepartmentRouter().router;
