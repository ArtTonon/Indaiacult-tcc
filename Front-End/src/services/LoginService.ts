import { AxiosError } from "axios";
import { server } from "../server";
import { Usuario } from "../interfaces/UserInterface";

export const LoginUser = async (email: string, password: string) => {
  try {
    const res = await server.post("/loginUsuario", {
      email,
      password,
    });
    const user: Usuario = {
      _id: res.data.id,
      email: res.data.email,
      imagem: res.data.img,
      nome: res.data.name,
      token: res.data.token,
    };
    window.localStorage.removeItem("artist");
    window.localStorage.setItem("user", JSON.stringify(user as Usuario));
  } catch (error: any) {
    return error.message;
  }
};
