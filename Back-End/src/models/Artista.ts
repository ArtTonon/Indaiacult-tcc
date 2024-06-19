import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IArtista extends Document {
  redesSociais: string[];
  nome: string;
  imagem: string;
  email: string;
  senha: string;
  avaliacao: number;
  qtdAvaliacao: number;
  genero: string;
  descricao: string;
  banner: string;
  comparePassword: (enteredPassword: string) => boolean;
}

const artistaSchema = new Schema<IArtista>({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
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
  imagem: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  avaliacao: {
    type: Number,
    default: 0,
  },
  qtdAvaliacao: {
    type: Number,
    default: 0,
  },
  redesSociais: {
    type: [String],
  },
});
artistaSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
});
artistaSchema.methods.comparePassword = async function (
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.senha);
};

const Artista = mongoose.model('Artista', artistaSchema);

export default Artista;
