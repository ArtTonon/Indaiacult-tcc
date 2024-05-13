import { Obra } from "../interfaces/ObrasInterface";
import { Link } from "react-router-dom";

const ObrasCard: React.FC<{
  obra: Obra;
}> = ({ obra }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white dark:bg-diffBlack rounded-xl border-4 p-4 border-highlight dark:border-highlightDark gap-4">
      <img
        src={obra.image}
        alt="foto da obra"
        className="w-full h-64 rounded-xl"
      />
      <div className="flex w-full flex-col justify-between">
        <div>
          <h1 className="font-semibold text-2xl capitalize line-clamp-1">
            {obra.title}
          </h1>
        </div>
        <div>
          <p className="text-black/75 text-xl h-14 line-clamp-2 dark:text-white/75">
            {obra.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <img
              src={obra.artistaImage}
              alt="Foto do artista"
              className="h-12 w-12 rounded-full object-cover"
            />
            <h2>{obra.artista}</h2>
          </div>
          <h3 className="border-2 rounded-full capitalize py-2 px-4 border-darkblue dark:border-lightblue">
            {obra.category}
          </h3>
        </div>
        <Link to="/artist/:id">
          <button className="w-full text-lg bg-darkblue text-white dark:bg-lightblue py-2 rounded-lg font-semibold">
            <h2>Perfil do artista</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ObrasCard;
