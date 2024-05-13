import LandingButton from "../components/LandingButton";
import { useTheme } from "../context";
import LandingNav from "../components/LandingNav";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import "../App.css";

const LandingPage = () => {
  const { darkMode } = useTheme();
  return (
    <section className="backgroundLanding flex-row bg-cover h-screen">
      <LandingNav />

      <div className="flex flex-col py-36 gap-20 p-5">
        <p className="font-montserrat dark:text-white text-start font-medium text-4xl md:text-6xl">
          Conheça a <span className="text-main font-semibold">cultura</span> e
          os artistas <br /> de{" "}
          <span className="text-darkblue dark:text-lightblue font-semibold">
            Indaiatuba
          </span>{" "}
          <span>com Indaiacult!</span>
        </p>
        <h3 className="font-montserrat text-start dark:text-white text-xl md:text-3xl justify-center">
          Conheça artistas locais e veja suas obras, o IndaiaCult <br /> é uma
          roda cultural a poucos cliques de distância
        </h3>
        <div className="flex flex-row items-center gap-8 md:gap-14">
          <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
            <FaFacebook
              size={54}
              className="text-darkblue dark:text-lightblue hover:scale-110"
              aria-label="Ícone do Facebook, que irá te redirecionar à página oficial do indaiacult no Facebook"
            />
          </a>
          <a href="https://www.instagram.com/indaia_cult" rel="noopener noreferrer" target="_blank">
            <FaInstagram
              size={54}
              className="text-darkblue dark:text-lightblue hover:scale-110"
              aria-label="Ícone do Instagram, que irá te redirecionar à página oficial do indaiacult no Instagram"
            />
          </a>
          <a href="https://www.tiktok.com/@indaia.cult" rel="noopener noreferrer" target="_blank">
            <FaTiktok
              size={44}
              className="text-darkblue dark:text-lightblue hover:scale-110"
              aria-label="Ícone do TikTok, que irá te redirecionar à página oficial do indaiacult no TikTok"
            />
          </a>
        </div>
        <LandingButton />
      </div>  
      <div
        className="bg-landingContainer bg-cover fixed bottom-0 right-40 w-[494px] h-[812px] rounded-tl-xl rounded-tr-xl"
        aria-label="imagem ilustrativa da página inicial"
      ></div>
    </section>
  );
};

export default LandingPage;
