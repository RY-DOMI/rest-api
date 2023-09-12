import { Router } from "express";
import DeviceController from "../controllers/device.controller";

class DeviceRouter {
  public router: Router = Router();
  private controller: DeviceController = new DeviceController();

  constructor() {
    this.router
      .get("/", this.controller.getAll)
      .get("/:id", this.controller.getById)
      .post("/", this.controller.create)
      .put("/:id", this.controller.update)
      .delete("/:id", this.controller.delete);
  }
}

export default new DeviceRouter().router;
