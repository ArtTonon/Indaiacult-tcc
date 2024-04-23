import axios from "axios";
import { server } from "../server";

export const seeAll = async () => {
  try {
    const response = await server.get("http://localhost:3000/artist");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar artista:", error);
  }
};

export const seeById = async (id: string) => {
  try {
    const response = await server.get("http://localhost:3000/artist" + id);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar artista por id:", error);
  }
};
