import { server } from "../server";

export const seeAll = async () => {
  try {
    const response = await server.get("/obras/todasObras");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar artista:", error);
  }
};

export default seeAll;
