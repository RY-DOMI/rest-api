import { Router } from "express";
import AddressController from "../controllers/address.controller";

class AddressRouter {
  public router: Router = Router();
  private controller: AddressController = new AddressController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new AddressRouter().router;
