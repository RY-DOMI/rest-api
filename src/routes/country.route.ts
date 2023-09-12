import { Router } from "express";
import CountryController from "../controllers/country.controller";

class CountryRouter {
  public router: Router = Router();
  private controller: CountryController = new CountryController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new CountryRouter().router;
