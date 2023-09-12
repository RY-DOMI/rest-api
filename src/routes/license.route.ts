import { Router } from "express";
import LicenseController from "../controllers/license.controller";

class LicenseRouter {
  public router: Router = Router();
  private controller: LicenseController = new LicenseController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new LicenseRouter().router;
