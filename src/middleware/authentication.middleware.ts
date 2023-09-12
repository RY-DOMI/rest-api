import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/authentication";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header) {
    res.sendStatus(403);
    return;
  }

  const token = header.split(" ")[1];
  verifyJwt(token)
    .then((decoded) => {
      if (decoded.exp < Date.now() / 1000)
        res.status(403).send("Token expired!");
      (req as any).decoded = decoded;
      next();
    })
    .catch((err) => res.status(403).send(err.message));
};
