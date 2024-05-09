import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { seeById } from "../services/ArtistService";
import { artists } from "../mock";
import { Artist } from "../interfaces/ArtistInterface";

const ArtistDetailstPage = () => {
  const { id } = useParams();

  const [artista, setArtista] = useState<Artist | undefined>(artists[0]);
  if (!id || !artista) {
    return <Navigate to={"/artist"} replace />;
  }
  return (
    <div className="">
      <div>
        <img
          src={artista.image}
          alt=""
          width={200}
          height={200}
          className="rounded-full border-4 border-lightblue object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold font-montserrat dark:text-white">
        {artista.name}
      </h1>
    </div>
  );
};

export default ArtistDetailstPage;
