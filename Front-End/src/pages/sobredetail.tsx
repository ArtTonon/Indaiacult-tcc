import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Sobre } from "../interfaces/SobreInterface";
import { sobre } from "../sobreMock";

const SobreDetailPage = () => {
  const { id } = useParams();

  const [Sobre, setSobre] = useState<Sobre | undefined>(sobre[0]);
  if (!id || !Sobre) {
    return <Navigate to={"/sobre"} replace />;
  }
  return (
    <section>
      <div className="flex flex-col w-full rounded-xl gap-4 p-5 text-justify">
        <div className="-space-y-24 object-cover">
          <img className="border-lg w-full h-96" src={Sobre.imagem} />
        </div>
        <h1 className="text-2xl font-bold font-montserrat dark:text-white">
          {Sobre.titulo}
        </h1>

        <p className="">{Sobre.descricao}</p>
      </div>
    </section>
  );
};

export default SobreDetailPage;
