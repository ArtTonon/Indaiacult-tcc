import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Artista } from "../interfaces/ArtistInterface";
import { seeAll, seeById } from "../services/ArtistService";

const ArtistDetailstPage = () => {
  const { id } = useParams();
  const [artista, setArtista] = useState<Artista | undefined>();

  useEffect(() => {
    if (!id) {
      return;
    }
    const get = async () => {
      const res = await seeById(id);
      setArtista(res);
      if (!artista) {
        return <Navigate to={"/artists"} replace />;
      }
    };
    get();
  }, []);

  return (
    <section className="">
      {artista && (
        <div className="flex flex-col rounded-xl gap-4 text-justify">
          <div className="-space-y-24 object-cover ">
            <img
              src={artista.banner}
              alt={`foto banner do artista ${artista.nome}`}
              className="w-full h-48  object-cover"
            />
            <img
              className="rounded-full object-cover h-48 w-48  mx-5"
              src={artista.imagem}
              alt={`foto de perfil do artista ${artista.nome}`}
            />
          </div>

          <div className="p-6">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-bold font-montserrat dark:text-white">
                {artista.nome}
              </h1>
              <h2 className="font-xl border-2 border-darkblue rounded-lg dark:border-lightblue py-2 px-3  text-black/50 dark:text-white/50">
                {artista.genero}
              </h2>
            </div>
            <p className="">{artista.descricao}</p>

            <h1 className="font-bold font-montserrat text-2xl">
              Obras de {artista.nome}:
            </h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtistDetailstPage;
