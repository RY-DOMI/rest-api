import { Router } from "express";
import SoftwareController from "../controllers/software.controller";

class SoftwareRouter {
  public router: Router = Router();
  private controller: SoftwareController = new SoftwareController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new SoftwareRouter().router;
