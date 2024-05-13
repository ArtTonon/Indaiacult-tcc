import ObrasCard from "../components/ObrasCard";
import Section from "../components/Section";
import { obras } from "../obrasMock";

const ObrasPage = () => {
  return (
    <Section
      title="Obras"
      description="Conheça quem alimenta a cultura de Indaiatuba diariamente com seu trabalho"
    >
      {obras.map((obra) => (
        <ObrasCard obra={obra} key={obra.id} />
      ))}
    </Section>
  );
};

export default ObrasPage;
