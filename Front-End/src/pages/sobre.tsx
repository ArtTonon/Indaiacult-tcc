import SobreCard from "../components/SobreCard";
import { sobre } from "../sobreMock";
import { Sobre } from "../interfaces/SobreInterface";

const SobrePage = () => {
  return (
    <section>
      <div className="flex items-start flex-col gap-2 justify-center p-4">
        <h1 className="text-xl md:text-3xl dark:text-white font-bold font-montserrat">
          Sobre Indaiatuba
        </h1>
        <p className="dark:text-white font-montserrat ">
          Conheça mais sobre a história da nossa cidade. Aqui você irá encontrar
          fatos sobre os locais mais famosos da região.
        </p>
        <div className="flex flex-col gap-12 p-6">
          {sobre.map((sobre) => (
            <SobreCard sobre={sobre} key={sobre._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobrePage;
