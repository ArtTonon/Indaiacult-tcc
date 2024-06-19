import { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import Section from "../components/Section";
import { seeAll } from "../services/ArtistService";
import { Artista } from "../interfaces/ArtistInterface";

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await seeAll();
      setArtists(res);
    };
    get();
  }, []);

  return (
    <Section
      title="Artistas"
      description="Conheça quem alimenta a cultura de Indaiatuba diariamente com seu trabalho"
    >
      <div className="flex flex-col gap-5 ">
        {artists.map((Artist: Artista) => (
          <ArtistCard artista={Artist} key={Artist._id} />
        ))}
      </div>
    </Section>
  );
};

export default ArtistsPage;
