import { Request, Response, NextFunction } from "express";
import Controller from ".";

import AppService from "../services/app.service";
const appService: AppService = new AppService();

export default class AuthController extends Controller {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async authenticate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    appService
      .authenticate(req.body)
      .then((data) => super.responseWithResult(res, 200, data))
      .catch((err) => super.handleError(res, 500, err));
  }
}
