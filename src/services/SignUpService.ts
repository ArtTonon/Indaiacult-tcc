import Password from "antd/es/input/Password";
import { server } from "../server";
import { Usuario } from "../interfaces/UserInterface";

export const SignUpUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await server.post("/registrarUsuario", {
      name,
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
