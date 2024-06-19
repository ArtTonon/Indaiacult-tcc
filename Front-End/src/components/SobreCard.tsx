import React from "react";
import { Sobre } from "../interfaces/SobreInterface";
import { Link } from "react-router-dom";

const SobreCard: React.FC<{ sobre: Sobre }> = ({ sobre }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row bg-white dark:bg-diffBlack rounded-xl border-4 p-4 border-highlight dark:border-highlightDark gap-4">
      <div className="w-full h-full flex rounded-xl overflow-hidden">
        <img src={sobre.imagem} alt="imagem" className="object-cover" />
      </div>
      <div className="flex w-full h-full flex-col justify-between gap-4">
        <div>
          <h1 className="font-semibold font-montserrat text-xl md:text-2xl capitalize line-clamp-1">
            {sobre.titulo}
          </h1>
        </div>

        <div>
          <p className="text-black/75 text-lg font-montserrat line-clamp-5 dark:text-white/75">
            {sobre.descricao}
          </p>
        </div>
        <Link to="/sobre/:id">
          <button className="w-full text-lg bg-darkblue font-montserrat hover:bg-lightblue text-white dark:bg-lightblue dark:hover:bg-darkblue py-2 rounded-lg font-semibold">
            <h2>Ver mais</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SobreCard;
