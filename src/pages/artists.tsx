import ArtistCard from "../components/ArtistCard";
import Section from "../components/Section";

import { artists } from "../mock";

const ArtistsPage = () => {
  return (
    <Section
      title="Artistas"
      description="Conheça quem alimenta a cultura de Indaiatuba diariamente com seu trabalho"
    >
      <div className="flex flex-col gap-5">
        {artists.map((artista) => (
          <ArtistCard artista={artista} key={artista.id} />
        ))}
      </div>
    </Section>
  );
};

export default ArtistsPage;
