import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { artists } from "../mock";
import { Artista } from "../interfaces/ArtistInterface";
import { LuPencil } from "react-icons/lu"; //adicionar icone para editar foto

const ArtistDetailstPage = () => {
  const { id } = useParams();

  const [artista] = useState<Artista | undefined>(artists[0]); //fazer setArtista
  if (!id || !artista) {
    return <Navigate to={"/artist"} replace />;
  }
  return (
    <section>
      <div className="flex flex-col gap-2 items-center">
        <img
          src={artista.imagem}
          alt={`foto de perfil do artista ${artista.nome}`}
          width={200}
          height={200}
          className="rounded-full border-4 border-lightblue object-cover"
        />
        <h1 className="text-2xl font-bold font-montserrat dark:text-white">
          {artista.nome}
        </h1>
        <h2 className="font-xl text-black/50 dark:text-white/50">
          {artista.genero}
        </h2>
        <p className="">{artista.descricao}</p>
      </div>
    </section>
  );
};

export default ArtistDetailstPage;
