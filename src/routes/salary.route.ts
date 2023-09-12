import { Router } from "express";
import SalaryController from "../controllers/salary.controller";

class SalaryRouter {
  public router: Router = Router();
  private controller: SalaryController = new SalaryController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new SalaryRouter().router;
