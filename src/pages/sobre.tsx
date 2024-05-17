import LandingNav from "../components/LandingNav";
import { SobreCard } from "../components/SobreCard";

const SobrePage = () => {
  return (
    <section>
      <LandingNav />
      <div className="flex items-center flex-col gap-2 justify-center p-4">
        <h1 className="text-xl md:text-3xl dark:text-white font-bold font-montserrat">
          Conheça a história de Indaiatuba
        </h1>
        <p className="dark:text-white font-montserrat ">
          Conheça mais sobre a história da nossa cidade. Aqui você irá encontrar
          fatos sobre os locais mais famosos da região.
        </p>
        <div className="p-6 ">
          <SobreCard />
        </div>
      </div>
    </section>
  );
};

export default SobrePage;
