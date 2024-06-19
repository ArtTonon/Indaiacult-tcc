import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { decode } from "punycode";

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.cookies.jwt;
    console.log(token);

    if (!token) {
      return res
        .status(401)
        .send({ message: "Não autorizado, token não encontrado" });
    }

    const jwtSecret = process.env.JWT_SECRET || "";
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

    if (!decoded || !decoded.userId || !decoded.artistId) {
      console.log(decoded);
      res.status(401);
      return res
        .status(401)
        .send({ message: "Não autorizado, artistaId não encontrado" });
    }

    return next();
  } catch (e) {
    res.status(500);
    throw new Error("Not authorized, invalid token");
  }
};

export { authenticate };
