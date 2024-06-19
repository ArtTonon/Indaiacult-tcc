// types.ts
export interface UsuarioBasicInfo {
  _id: string;
  nome: string;
  email: string;
  senha: string;
  imagem: string;
}

declare global {
  namespace Express {
    interface Request {
      usuario?: UsuarioBasicInfo | null;
    }
  }
}
