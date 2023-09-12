import { Router } from "express";
import AuthController from "../controllers/auth.controller";

class AuthRouter {
  public router: Router;
  private controller: AuthController;

  constructor() {
    this.router = Router();
    this.controller = new AuthController();

    this.router.post("/", this.controller.authenticate);
  }
}

export default new AuthRouter().router;
