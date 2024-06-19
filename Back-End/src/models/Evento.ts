import mongoose, { Date, Document, Schema } from 'mongoose';

export interface IEvento extends Document {
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

const eventoSchema = new Schema<IEvento>({
  titulo: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
  cep: {
    type: Number,
    required: true,
  },
  artistas: {
    type: [String],
    required: true,
  },
  avaliacao: {
    type: String,
    default: null,
  },
  qtdAvaliacao: {
    type: String,
    default: null,
  },
});

const Evento = mongoose.model<IEvento>('Evento', eventoSchema);

export default Evento;
