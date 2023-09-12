import { Request, Response, NextFunction } from "express";

export default abstract class Controller {
  public responseWithResult(
    res: Response,
    statusCode: number,
    entity: any
  ): any {
    if (entity) return res.status(statusCode).json(entity);
    return res.status(statusCode);
  }

  public handleError(res: Response, statusCode: number, error: any): any {
    console.error(error);
    return res.status(statusCode).send(error);
  }

  abstract getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  abstract getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  abstract create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  abstract update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  abstract delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
}
