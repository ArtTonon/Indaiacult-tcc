import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (res: Response, userId: string) => {
  const jwtSecret = process.env.JWT_SECRET || "";
  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: "3h",
  });

  res.cookie("jwt", token, {
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 180 * 180 * 1000,
  });
  return token;
};

const clearToken = (res: Response) => {
  res.cookie("jwt", "", {
    expires: new Date(0),
  });
};

export { generateToken, clearToken };
