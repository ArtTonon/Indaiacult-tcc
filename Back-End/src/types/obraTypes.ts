// types.ts
export interface ObraBasicInfo {
  Id: String;
  titulo: string;
  descricao: string;
  genero: string;
  autor: string;
  qtdAvaliacoes: number;
  avaliacoes: number;
  data: Date;
  imagem: string;
}

declare global {
  namespace Express {
    interface Request {
      obra?: ObraBasicInfo | null;
    }
  }
}
