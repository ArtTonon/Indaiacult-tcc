import React, { FormEvent, useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../userContext";
import { GoPencil } from "react-icons/go";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { genero } from "../interfaces/GeneroInterface";
import { server } from "../server";

const CreateObraPage = () => {
  const { artista } = useUser();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);
  const [genero, setGenero] = useState<string>("");
  const navigate = useNavigate();

  const SubmitObra = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!imagem) {
        return;
      }
      const imageRef = ref(storage, `image/obras/${titulo + artista?._id}`);
      await uploadBytes(imageRef, imagem);
      const imageUrl = await getDownloadURL(imageRef);

      await server.post("/obras/criarObra", {
        titulo,
        descricao,
        genero,
        imagem: imageUrl,
        autor: artista?._id,
        data: new Date(),
        avaliacoes: 0,
        qtdAvaliacoes: 0,
      });
      navigate("/obras");
    } catch (error) {
      console.error("Não foi possivel criar a obra");
    }
  };

  return (
    <section className="p-5">
      <h1 className="text-2xl font-bold items-start">
        Faça a postagem de uma nova obra
      </h1>
      <form onSubmit={SubmitObra} className="flex flex-col p-4 gap-4">
        <label htmlFor="" className="">
          <span className="font-montserrat font-medium">Título da obra</span>
          <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
            <input
              type="text"
              placeholder="Insira um título"
              className="font-montserrat bg-transparent"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
        </label>
        <label htmlFor="" className="">
          <span className="font-montserrat font-medium">Descrição da obra</span>
          <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
            <input
              type="text"
              placeholder="Insira uma descrição para a sua obra"
              className="font-montserrat bg-transparent"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </label>
        <label>
          <p className="font-medium font-montserrat">
            Insira o tipo de arte que será postado
          </p>
          <div className="p-3">
            <select
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              className="py-2 px-3 text-black border-2 border-darkblue dark:border-lightblue rounded-lg"
            >
              <option value="">Escolha uma opção</option>
              <option value="Pintura">Pintura</option>
              <option value="Música">Música</option>
              <option value="Escultura">Escultura</option>
              <option value="Dança">Dança</option>
              <option value="Poesia">Poesia</option>
            </select>
          </div>
        </label>
        <span className="font-medium font-montserrat">
          Insira uma foto para sua obra
        </span>
        <div className="flex flex-col items-end -space-x-8 -space-y-2">
          <input
            type="file"
            id="ArtistaBannerImagem"
            className="hidden"
            onChange={(e) => {
              e.target.files && setImagem(e.target.files[0]);
            }}
          />
          <img
            src={
              imagem ? URL.createObjectURL(imagem) : "/defaultObraBanner.png"
            }
            alt=""
            className="rounded-lg border-4 border-darkblue dark:border-lightblue w-full object-cover h-52"
          />

          <label
            htmlFor="ArtistaBannerImagem"
            className="flex cursor-pointer items-center justify-center rounded-full px-3 py-3 w-max h-max bg-darkblue dark:bg-lightblue"
          >
            <GoPencil className="fill-white" />
          </label>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-darkblue dark:bg-lightblue hover:bg-darkblue dark:hover:bg-darkblue rounded-lg py-3 text-white"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default CreateObraPage;
