import { Router } from "express";
import RoleController from "../controllers/role.controller";

class RoleRouter {
  public router: Router = Router();
  private controller: RoleController = new RoleController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new RoleRouter().router;
