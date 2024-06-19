// types.ts
export interface ArtistaBasicInfo {
  _id: string;
  redesSociais: string[];
  nome: string;
  imagem: string;
  email: string;
  avaliacao: number;
  qtdAvaliacao: number;
  genero: string;
  descricao: string;
  banner: string;
}

declare global {
  namespace Express {
    interface Request {
      artista?: ArtistaBasicInfo | null;
    }
  }
}
