import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IObra extends Document {
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

const obraSChema = new Schema<IObra>({
  titulo: {
    type: String,
  },
  descricao: {
    type: String,
  },
  genero: {
    type: String,
  },
  autor: {
    type: String,
  },
  qtdAvaliacoes: {
    type: Number,
  },
  avaliacoes: {
    type: Number,
  },
  data: {
    type: Date,
  },
  imagem: {
    type: String,
  },
});

const Obra = mongoose.model('Obra', obraSChema);

export default Obra;
