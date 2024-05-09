import React from "react";
import ArtistCard from "../components/ArtistCard";
import { Artist } from "../interfaces/ArtistInterface";
import { artists } from "../mock";

const ArtistsPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 justify-center text-4xl font-semibold font-montserrat dark:text-white">
          Artistas
          <p className="flex text-lg items-center  dark:text-white font-semibold">
            Conheça quem alimenta a cultura de Indaiatuba diariamente com seu
            trabalho
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          {artists.map((artista) => (
            <ArtistCard artista={artista} key={artista.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
