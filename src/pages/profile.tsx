import { Pencil } from "lucide-react";
import { useState } from "react";

import { useAuth } from "../contexts/Auth.context";

export default function Profile() {
  const { user,  setAuthenticated } = useAuth();

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


/*
import { Pencil } from "lucide-react";
import { useState } from "react";

import { useAuth } from "../contexts/Auth.context";

import { useError } from "../contexts/Error.context";

export default function Profile() {
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