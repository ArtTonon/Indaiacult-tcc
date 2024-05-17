import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Usuario } from "./interfaces/UserInterface";
import { Artista } from "./interfaces/ArtistInterface";

interface UserContextType {
  usuario: Usuario | null;
  artista: Artista | null;
  isLoggedIn: boolean | null;
  keepLoggedIn: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [artista, setArtista] = useState<Artista | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const keepLoggedIn = () => {
    const storedUser = localStorage.getItem("user");
    const storedArtist = localStorage.getItem("artist");

    if (storedUser) {
      const parsed = JSON.parse(storedUser) as Usuario;
      const isValidToken: boolean =
        parsed.token ==
        document.cookie
          .split("; ")
          .find((row) => row.trim().startsWith("jwt="))
          ?.split("=")[1];
      console.log(isValidToken);
      if (isValidToken) {
        setUsuario(parsed);
        setIsLoggedIn(true);
      }
    } else if (storedArtist) {
      const parsed = JSON.parse(storedArtist) as Artista;
      const isValidToken: boolean =
        parsed.token ===
        document.cookie
          .split("; ")
          .find((row) => row.trim().startsWith("jwt="))
          ?.split("=")[1];
      if (isValidToken) {
        setArtista(parsed);
        setIsLoggedIn(true);
      }
    }
  };

  useEffect(() => {
    keepLoggedIn();
  }, []);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, usuario, artista, keepLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
