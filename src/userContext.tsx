import React, { createContext, ReactNode, useContext, useState } from "react";

interface User {
  id: string;
  name: string;
  img: string;
  email: string;
}

interface Artist extends User {
  genre: string;
  description: string;
  image: string;
  banner: string;
}

interface UserContextType {
  user: User | null;
  artist: Artist | null;
  setUser: (user: User | null) => void;
  setArtist: (artist: Artist | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({
    email: "",
    id: "",
    img: "",
    name: "aaaa",
  });
  const [artist, setArtist] = useState<Artist | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser, artist, setArtist }}>
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
