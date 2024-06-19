import { Request, Response } from "express";
import Artista from "../../models/Artista";
import { generateToken, clearToken } from "../../utils/auth";
//
const registerArtista = async (req: Request, res: Response) => {
  const {
    nome,
    imagem,
    email,
    senha,
    avaliacao,
    qtdAvaliacao,
    genero,
    descricao,
    banner,
    redesSociais,
  } = req.body;
  const artistaExists = await Artista.findOne({ email });

  if (artistaExists) {
    return res.status(400).json({ message: "Artista já existente" });
  }

  const artista = await Artista.create({
    nome,
    imagem,
    email,
    senha,
    avaliacao,
    qtdAvaliacao,
    genero,
    descricao,
    banner,
    redesSociais,
  });

  if (artista) {
    const token = generateToken(res, artista._id);
    res.status(201).json({
      _id: artista._id,
      nome: artista.nome,
      email: artista.email,
      genero: artista.genero,
      descricao: artista.descricao,
      imagem: artista.imagem,
      banner: artista.banner,
      avaliacao: artista.avaliacao,
      qtdAvaliacao: artista.qtdAvaliacao,
      redesSociais: artista.redesSociais,
      token,
    });
  } else {
    res
      .status(400)
      .json({ message: "Aconteceu um erro durante a criação deste Artista" });
  }
};

const authenticateArtista = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const artista = await Artista.findOne({ email });

  if (artista && (await artista.comparePassword(password))) {
    const token = generateToken(res, artista._id);
    res.status(201).json({
      _id: artista._id,
      nome: artista.nome,
      email: artista.email,
      genero: artista.genero,
      descricao: artista.descricao,
      imagem: artista.imagem,
      banner: artista.banner,
      avaliacao: artista.avaliacao,
      qtdAvaliacao: artista.qtdAvaliacao,
      token,
    });
  } else {
    res
      .status(401)
      .json({ message: "Artista não encontrado / password incorrect" });
  }
};

const logoutArtista = (req: Request, res: Response) => {
  clearToken(res);
  res.status(200).json({ message: "Artista se desconectou" });
};

export { registerArtista, authenticateArtista, logoutArtista };
