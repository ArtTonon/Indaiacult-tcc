import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Obras } from "../interfaces/ObrasInterface";
import { obras } from "../obrasMock";

const ObrasDetailstPage = () => {
  const { id } = useParams();

  const [Obras, setObras] = useState<Obras | undefined>(obras[0]); //fazer setObras
  if (!id || !Obras) {
    return <Navigate to={"/obras"} replace />;
  }
  return (
    <section>
      <div className="flex flex-col w-full rounded-xl gap-4 p-5 text-justify">
        <div className="-space-y-24 object-cover">
          <img
            className="border-lg w-full h-96"
            src={Obras.imagem}
            alt={`foto de perfil do artista ${Obras.autor}`}
          />
        </div>

        <h1 className="text-2xl font-bold font-montserrat dark:text-white">
          {Obras.titulo}
        </h1>
        <h2 className="font-xl text-black/50 dark:text-white/50">
          {Obras.genero}
        </h2>
        <p className="">{Obras.descricao}</p>
      </div>
    </section>
  );
};

export default ObrasDetailstPage;
