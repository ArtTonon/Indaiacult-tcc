import { Date } from 'mongoose';

// types.ts
export interface EventoBasicInfo {
  id: string;
  titulo: string;
  descricao: string;
  genero: string;
  data: Date;
  cep: number;
  imagem: string;
  autor: string;
  horario: string;
  qtdAvaliacao: string;
  avaliacao: string;
  artistas: string[];
}

declare global {
  namespace Express {
    interface Request {
      evento?: EventoBasicInfo | null;
    }
  }
}
