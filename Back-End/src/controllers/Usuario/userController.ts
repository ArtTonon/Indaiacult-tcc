import { Request, Response } from "express";
import Usuario from "../../models/Usuario";
import { UsuarioBasicInfo } from "../../types/usuarioTypes";

const createUsuario = async (req: Request, res: Response) => {
  try {
    const { nome, email, senha, imagem } = req.body;

    if (!nome || !email || !senha || !imagem) {
      return res
        .status(400)
        .json({ message: "Por favor, forneça todos os campos necessários." });
    }

    const existingUsuario = await Usuario.findOne({ email });
    if (existingUsuario) {
      return res.status(400).json({ message: "Este email já está em uso." });
    }

    const newUsuario = new Usuario({
      nome,
      email,
      senha,
      imagem,
    });

    await newUsuario.save();

    res
      .status(201)
      .json({ message: "Usuario criado com sucesso.", user: newUsuario });
  } catch (error) {
    console.error("Erro ao criar Usuario:", error);
    res.status(500).json({ message: "Ocorreu um erro ao criar o Usuario." });
  }
};

const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id, "nome email");

  if (!usuario) {
    res.status(400);
  }

  res.status(200).json(usuario);
};

const listUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await Usuario.find({}, "nome email");
    res.status(200).json(usuario);
  } catch (Error) {
    res.status(500).json(" Ocorreu um erro na listagem de usuario");
  }
};

const deleteUsuario = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  try {
    const usuario = await Usuario.findByIdAndDelete(usuarioId);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario not found." });
    }

    res.status(200).json({ message: "Usuario deletado com sucesso" });
  } catch (Error) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro enquanto se deletava o Usuario" });
  }
};

const updateUsuario = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  const { usuario } = req.body;

  if (!usuarioId) {
    res.status(500).json({ message: "Não foi possível encontrar o Usuario" });
  }

  try {
    await Usuario.findByIdAndUpdate(usuarioId, usuario);
    res.status(200).json({ message: " Usuario atualizado com sucesso" });
  } catch (Error) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro enquanto atualizava o Usuario" });
  }
};
export { createUsuario, getUsuario, listUsuario, deleteUsuario, updateUsuario };
