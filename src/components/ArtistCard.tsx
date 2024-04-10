import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ArtistCard: React.FC<{
  artista: { name: string; genre: string; image: string; banner: string };
}> = ({ artista }) => {
  return (
    <div className="flex flex-col md:flex-row  mx-auto rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-32 object-cover"
          src={artista.banner}
          alt="Banner"
        />

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 border-4 border-lightblue rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={artista.image}
            alt="Foto de perfil"
          />
        </div>
      </div>
      <h3 className="text-diffWhite font-bold"></h3>
    </div>
  );
};

export default ArtistCard;
