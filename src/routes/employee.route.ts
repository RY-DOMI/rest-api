import { Router } from "express";
import EmployeeController from "../controllers/employee.controller";

class EmployeeRouter {
  public router: Router = Router();
  private controller: EmployeeController = new EmployeeController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new EmployeeRouter().router;
