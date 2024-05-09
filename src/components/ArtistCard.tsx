import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRightLong } from "react-icons/fa6";
import { Artist } from "../interfaces/ArtistInterface";
import { Link } from "react-router-dom";

const ArtistCard: React.FC<{
  artista: Artist;
}> = ({ artista }) => {
  return (
    <div className="flex flex-col w-full rounded-lg mx-auto gap-2 shadow-darkblue dark:shadow-lightblue bg-white dark:bg-diffBlack shadow-md">
      <div className="-space-y-12">
        <img
          className="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl"
          src={artista.banner}
          alt="Banner"
        />
        <img
          src={artista.image}
          className="h-24 w-24 ml-4 rounded-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <div>
          <p className="text-black/50 dark:text-white/50 text-xl font-semibold">
            {artista.genre}
          </p>
          <h3 className=" font-bold font-montserrat dark:text-white text-2xl">
            {artista.name}
          </h3>
        </div>
        <p className=" dark:text-white font-montserrat font-medium line-clamp-3">
          {artista.description}
        </p>
      </div>
      <div className="w-max pb-5">
        <Link to={`/artist/${artista.id}`}>
          <button className="ml-2 flex items-center text-xl justify-center gap-2 py-3 px-5 border font-semibold border-darkblue hover:border-lightblue dark:border-lightblue dark:hover:border-darkblue text-black dark:text-white rounded-2xl">
            Ver mais
            <FaArrowRightLong className="flex mt-1" size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
