import { Pencil } from "lucide-react";
import { useState, useEffect, FormEvent } from "react";
import { useTheme } from "../context";

import { useAuth } from "../contexts/Auth.context";
import LandingNav from "../components/LandingNav";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";

export default function Perfil() {
  const { user,  setAuthenticated } = useAuth();
  const [capa, setCapa] = useState<string>("/assets/capa.svg"); // Estado inicial da capa

  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [] =
    useState<boolean>(false);


    const handleUpload = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsUploading(true);
      // Adicione aqui sua lógica de upload, se necessário
    };

  const { darkMode } = useTheme();

  const logout = () => {
    window.localStorage.removeItem("user");
    setAuthenticated(false);
  };

// Função para lidar com o clique no botão e selecionar uma nova imagem
    const trocarCapa = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Obter o arquivo de imagem selecionado pelo usuário
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                setCapa(result); // Atualizar o estado da capa para exibir a nova imagem
            };
            reader.readAsDataURL(file);
        }
    };

  const handleFileUploadChange = (event: Event) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('profile-image')?.setAttribute('src', (event?.target as FileReader)?.result as string);
        }
        reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    fileInput.addEventListener('change', handleFileUploadChange);

    return () => {
      fileInput.removeEventListener('change', handleFileUploadChange);
    };
  }, []);

  return (
<>
    <LandingNav />
   
    <div className="flex justify-center">
            <div className="rounded-xl bg-white border-highlight border-4 px-1 py-1 ml-80 mr-80 w-screen h-80 flex items-center justify-center relative overflow-hidden">
                <img src={capa} alt="" className="h-full object-cover" width={300} />
                <label htmlFor="fileInput" className="cursor-pointer absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full px-2 shadow-md aspect-w-16 aspect-h-9">
                    <AiOutlinePicture className="float-right text-333 text-3xl mt-2" /> 
                    <input id="fileInput" type="file" accept="image/*" className="hidden" onChange={trocarCapa} />
                </label>
            </div>
        </div>
    <div className="ml-20 mt-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-end">
            <img
              id="profile-image"
              src={darkMode 
                ? "/assets/profile-dark.svg" 
                : "/assets/profile-light.svg"}
              alt="foto de perfil"
              width={240}
              height={240}
              className="md:block hidden object-cover rounded-full border-4 h-40 w-40 border-main dark:border-lightblue "
            />
            <form onSubmit={handleUpload}>
            <input
              id="file-upload"
              autoComplete="off"
              type="file"
              className="hidden"
              accept="image/*"
            />
            </form>
            <label
              htmlFor="file-upload"
              className="cursor-pointer p-3 bg-black dark:bg-white rounded-full shadow-xl"
            >
              {isUploading ? (
                <span className="animate-spin" />
                ) : (
                  <Pencil size={20}
                  className=" text-white dark:text-black" />
                )}
            </label>
          </div>
          <h1 className="text-4xl dark:text-white">{user.name}</h1>
        </div>
      </div>    
      <button className="mt-8 py-4 px-14 font-bold rounded-lg bg-lightblue dark:bg-main text-white text-xl hover:bg-darkblue dark:hover:bg-darkblue flex items-center justify-center space-x-2" onClick={logout}>
        <FaArrowRightToBracket /> <span>Sair</span>
      </button>
 
    </div> 
    </>
  );
}


/*
import { Pencil } from "lucide-react";
import { useState } from "react";

import { useAuth } from "../contexts/Auth.context";

import { useError } from "../contexts/Error.context";
import LandingNav from '../components/LandingNav';

export default function Perfil() {
  const { user,  setAuthenticated } = useAuth();
  const { } = useError();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [] =
    useState<boolean>(false);

  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      
    }
  };

  const logout = () => {
    window.localStorage.removeItem("user");
    setAuthenticated(false);
  };

  const upload = () => {
    if (selectedFile) {
      setIsUploading(true);

      if (selectedFile.size > 3 * 1024 * 1024) {
        setIsUploading(false);
        return;
      }

      
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-end -space-x-8">
            <img
              src={user.imageUrl}
              alt="foto de perfil do usuário"
              width={128}
              height={128}
              className="object-cover rounded-full border-4 h-32 w-32 border-purple dark:border-green"
            />
            <form onSubmit={upload} className="hidden">
              <input
                id="pfp"
                autoComplete="off"
                type="file"
                name="pfp"
                onChange={(e) => {
                  handleUpload(e);
                }}
              />
            </form>
            <label
              htmlFor="pfp"
              className="cursor-pointer p-3 bg-white dark:bg-dark rounded-full shadow-xl"
            >
              {isUploading ? (
                <span className="animate-spin" />
              ) : (
                <Pencil
                  size={20}
                  className="text-purple dark:text-green"
                />
              )}
            </label>
          </div>
          <h1 className="text-4xl">{user.name}</h1>
        </div>
        <button className="bg-dark w-full text-white font-bold py-2 px-8 rounded-lg" onClick={logout}>
          Sair
        </button>
      </div>      
    </>
  );
}
*/