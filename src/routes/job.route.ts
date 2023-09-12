import { Router } from "express";
import JobController from "../controllers/job.controller";

class JobRouter {
  public router: Router = Router();
  private controller: JobController = new JobController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new JobRouter().router;
