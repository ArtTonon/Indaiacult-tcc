import { server } from "../server";
import { Artista } from "../interfaces/ArtistInterface";
import { stringify } from "querystring";
import { error } from "console";

export const seeAll = async () => {
  try {
    const response = await server.get("/artista/listar");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar artista:", error);
  }
};

export const seeById = async (id: string) => {
  try {
    const response = await server.get("/artista/listarId/" + id);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar artista por id:", error);
  }
};

export const signUpArtista = async (
  name: string,
  email: string,
  password: string,
  genre: string,
  description: string,
  redessociais: string[],
  image: string,
  banner: string
) => {
  try {
    const res = await server.post("/artista/registrar", {
      nome: name,
      email,
      imagem: image,
      descricao: description,
      banner,
      genero: genre,
      senha: password,
      redesSociais: redessociais,
    });
    const artist: Artista = {
      _id: res.data._id,
      nome: res.data.nome,
      email: res.data.email,
      imagem: res.data.imagem,
      descricao: res.data.descricao,
      banner: res.data.banner,
      genero: res.data.genero,
      redessociais: res.data.redesSociais,
      avaliacao: res.data.avaliacao,
      qtdAvaliacao: res.data.qtdAvaliacao,
      token: res.data.token,
    };
    window.localStorage.removeItem("user");
    window.localStorage.setItem("artist", JSON.stringify(artist as Artista));
  } catch (error: any) {
    return error.message;
  }
};

export const updateArtista = async (
  id: string,
  name: string,
  email: string,
  genre: string,
  description: string,
  redessociais: string[],
  image: string,
  banner: string
) => {
  try {
    const res = await server.patch(`/artista/atualizarArtista/` + id, {
      nome: name,
      email,
      imagem: image,
      descricao: description,
      banner,
      genero: genre,
      redesSociais: redessociais,
    });

    const updatedArtista: Artista = {
      _id: res.data._id,
      nome: res.data.nome,
      email: res.data.email,
      imagem: res.data.imagem,
      descricao: res.data.descricao,
      banner: res.data.banner,
      genero: res.data.genero,
      redessociais: res.data.redesSociais,
      avaliacao: res.data.avaliacao,
      qtdAvaliacao: res.data.qtdAvaliacao,
      token: res.data.token,
    };

    // Atualiza os dados do artista no armazenamento local, se necessário
    const storedArtista = window.localStorage.getItem("artist");
    if (storedArtista) {
      window.localStorage.setItem("artist", JSON.stringify(updatedArtista));
    }

    return updatedArtista;
  } catch (error: any) {
    console.error("Erro ao atualizar artista:", error);
    return error.message;
  }
};

export const loginArtista = async (email: string, password: string) => {
  try {
    const res = await server.post("/loginArtista", {
      email,
      password,
    });
    const artist: Artista = {
      _id: res.data._id,
      nome: res.data.nome,
      email: res.data.email,
      imagem: res.data.imagem,
      descricao: res.data.descricao,
      banner: res.data.banner,
      genero: res.data.genero,
      redessociais: res.data.redesSociais,
      avaliacao: res.data.avaliacao,
      qtdAvaliacao: res.data.qtdAvaliacao,
      token: res.data.token,
    };
    window.localStorage.removeItem("user");
    window.localStorage.setItem("artist", JSON.stringify(artist as Artista));
  } catch (error: any) {
    return error.message;
  }
};
