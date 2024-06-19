import React, { useEffect } from "react";
import { useUser } from "../userContext";
import { NavigationType, useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Artista } from "../interfaces/ArtistInterface";
import { seeById } from "../services/ArtistService";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

interface ArtistaCard {
  artista: Artista;
}

const ArtistCard = ({ artista }: ArtistaCard) => {
  return (
    <div className="flex flex-col w-full rounded-xl mx-auto gap-2 bg-white dark:bg-diffBlack border-4 border-highlight dark:border-highlightDark">
      <div className="-space-y-12">
        <img
          className="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl"
          src={artista?.banner}
          alt="Banner"
        />
        <img
          src={artista?.imagem}
          alt={`foto do artista ${artista?.nome}`}
          className="h-24 w-24 ml-4 rounded-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <div>
          <p className="text-black/50 dark:text-white/50 text-xl font-semibold">
            {artista?.genero}
          </p>
          <h3 className=" font-bold font-montserrat dark:text-white text-xl">
            {artista?.nome}
          </h3>
        </div>
        <p className=" dark:text-white font-montserrat font-medium line-clamp-3">
          {artista?.descricao}
        </p>
        <Link to={`/artist/${artista?._id}`}>
          <button
            aria-label="botão para ver mais sobre um artista em específico"
            className="flex items-center mt-3 text-xl justify-center capitalize gap-2 py-2 px-5 border font-semibold border-darkblue hover:border-lightblue dark:border-lightblue dark:hover:border-darkblue text-black dark:text-white rounded-3xl"
          >
            Ver mais
            <FaArrowRightLong className="flex mt-1" size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
