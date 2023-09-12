import { Router } from "express";
import PermissionController from "../controllers/permission.controller";

class PermissionRouter {
  public router: Router = Router();
  private controller: PermissionController = new PermissionController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new PermissionRouter().router;
