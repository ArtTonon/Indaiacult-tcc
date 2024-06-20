export interface Obras {
  _id: string;
  titulo: string;
  descricao: string;
  genero: string;
  autor: string;/*{ nome: string; _id: string; imagem: string };*/
  qtdAvaliacoes: number;
  avaliacoes: number;
  data: Date;
  imagem: string;
  imagemArtista: string;
}
