import { Request, Response, NextFunction } from "express";
import Controller from ".";
import DeviceService from "../services/device.service";
const service: DeviceService = new DeviceService();

export default class DeviceController extends Controller {
  constructor() {
    super();
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    service
      .getAll({})
      .then((results) => super.responseWithResult(res, 200, results))
      .catch((err) => super.handleError(res, 500, err));
  }

  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    service
      .get({ _id: req.params.id })
      .then((result) => super.responseWithResult(res, 200, result))
      .catch((err) => super.handleError(res, 500, err));
  }

  async getByEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    service
      .get({ email: req.params.email })
      .then((result) => super.responseWithResult(res, 200, result))
      .catch((err) => super.handleError(res, 500, err));
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    service
      .create(req.body)
      .then((result) => super.responseWithResult(res, 200, result))
      .catch((err) => super.handleError(res, 500, err));
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    service
      .update({ _id: req.params.id }, req.body)
      .then((result) => super.responseWithResult(res, 200, result))
      .catch((err) => super.handleError(res, 500, err));
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    service
      .delete({ _id: req.params.id })
      .then((result) => super.responseWithResult(res, 200, result))
      .catch((err) => super.handleError(res, 500, err));
  }
}
