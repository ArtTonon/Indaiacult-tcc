import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUsuario extends Document {
  nome: string;
  email: string;

  senha: string;
  imagem: string;
  comparePassword: (enteredPassword: string) => Promise<boolean>;
}

const usuarioSchema = new Schema<IUsuario>({
  nome: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    default: "default.png",
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
});

usuarioSchema.pre<IUsuario>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  return next();
});

usuarioSchema.methods.comparePassword = async function (
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.senha);
};

const Usuario = mongoose.model<IUsuario>("User", usuarioSchema);

export default Usuario;
