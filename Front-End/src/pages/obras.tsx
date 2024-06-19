import { useEffect, useState } from "react";
import ObrasCard from "../components/ObrasCard";
import Section from "../components/Section";
import { obras } from "../obrasMock";
import { seeAll } from "../services/ObraService";
import { Obras } from "../interfaces/ObrasInterface";

const ObrasPage = () => {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await seeAll();
      setObras(res);
    };
    get();
  }, []);

  return (
    <Section
      title="Obras"
      description="Conheça quem alimenta a cultura de Indaiatuba diariamente com seu trabalho"
    >
      {obras.map((obra: Obras) => (
        <ObrasCard obra={obra} key={obra._id} />
      ))}
    </Section>
  );
};

export default ObrasPage;
