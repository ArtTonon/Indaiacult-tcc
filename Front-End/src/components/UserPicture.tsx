import { useEffect, useState } from "react";
import { useUser } from "../userContext";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";

const UserPicture = () => {
  const { usuario, artista } = useUser();

  return (
    <div>
      <div className="flex ">
        <div className="flex items-end -space-x-8">
          <Link to={`/editar-perfil`}>
            <img
              src={artista?.imagem ? artista.imagem : usuario?.imagem}
              alt=""
              className="rounded-full border-4 border-darkblue object-cover dark:border-lightblue w-10 h-10 md:w-20 md:h-20"
            />
          </Link>
        </div>
      </div>
      <h1 className="font-semibold text-xl">
        {artista?.nome ? artista.nome : usuario?.nome}
      </h1>
    </div>
  );
};

export default UserPicture;
