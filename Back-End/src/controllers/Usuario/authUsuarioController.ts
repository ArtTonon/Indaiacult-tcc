import Usuario from "../../models/Usuario";
import { Request, Response } from "express";
import { clearToken, generateToken } from "../../utils/auth";

const registerUsuario = async (req: Request, res: Response) => {
  const { nome, email, senha, imagem } = req.body;
  const usuarioExits = await Usuario.findOne({ email });

  if (usuarioExits) {
    return res.status(400).json({ message: "Usuario já existente" });
  }

  const usuario = await Usuario.create({
    nome,
    email,
    senha,
    imagem,
  });

  if (usuario) {
    const token = generateToken(res, usuario._id);
    res.status(201).json({
      id: usuario._id,
      name: usuario.nome,
      email: usuario.email,
      imagem: usuario.imagem,
      token,
    });
  } else {
    res
      .status(400)
      .json({ message: "Aconteceu um erro durante a criação deste Usuario" });
  }
};

const authenticateUsuario = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email });

  if (usuario && (await usuario.comparePassword(password))) {
    const token = generateToken(res, usuario._id);
    res.status(201).json({
      id: usuario._id,
      name: usuario.nome,
      email: usuario.email,
      imagem: usuario.imagem,
      token,
    });
  } else {
    res
      .status(401)
      .json({ message: "Usuario não encontrado / password incorrent" });
  }
};

const logoutUsuario = (req: Request, res: Response) => {
  clearToken(res);
  res.status(200).json({ message: "Usuario se desconectou" });
};

export { registerUsuario, authenticateUsuario, logoutUsuario };
