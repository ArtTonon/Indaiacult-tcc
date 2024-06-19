import { Obras } from "../interfaces/ObrasInterface";
import { Link } from "react-router-dom";

const ObrasCard: React.FC<{
  obra: Obras;
}> = ({ obra }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white dark:bg-diffBlack rounded-xl border-4 p-4 border-highlight dark:border-highlightDark gap-4">
      <img
        src={obra.imagem}
        alt="foto da obra"
        className="w-full h-64 bg-red-500 rounded-xl"
      />
      <div className="flex w-full flex-col justify-between gap-4">
        <div>
          <h1 className="flex w-full font-semibold text-2xl capitalize line-clamp-1">
            {obra.titulo}
          </h1>
        </div>
        <div>
          <p className="text-black/75 text-xl line-clamp-2 capitalize dark:text-white/75">
            {obra.descricao}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={obra.autor?.imagem}
              alt="Foto do artista"
              className="h-12 w-12 rounded-full object-cover"
            />
            <h2>{obra.autor?.nome}</h2>
          </div>
          <h3 className="border-2 rounded-full capitalize py-2 px-4 border-darkblue dark:border-lightblue">
            {obra.genero}
          </h3>
        </div>
        <Link to="/obra/:id">
          <button className="w-full text-lg md:text-xl bg-darkblue text-white dark:bg-lightblue py-1 md:py-2 rounded-lg font-semibold">
            <h2>Ver mais sobre a Obra</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ObrasCard;
