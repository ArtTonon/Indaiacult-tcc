import React from "react";
import { useTheme } from "../context";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const LandingPage = () => {
  const { darkMode } = useTheme();
  return (
    <div>
      <div className="flex flex-col justify-center md:flex-row items-center">
        <div className="flex flex-col w-full gap-8 md:w-1/2 md:gap-14">
          <h1 className="font-montserrat font-semibold text-black dark:text-white text-4xl md:text-6xl ">
            Descubra toda a cultura de Indaiatuba em um só lugar
          </h1>
          <p className="font-montserrat text-black dark:text-white font-semibold text-xl md:text-4xl ">
            O indaiacult te permite explorar <br /> completamente a história{" "}
            <br /> e toda arte indaiatubana.
          </p>
          <div className="flex flex-row items-center gap-8 md:gap-16">
            <a href="">
              <FaFacebook
                size={54}
                className="text-darkblue dark:text-lightblue hover:scale-110"
                aria-label="Ícone do Facebook, que irá te redirecionar à página oficial do indaiacult no Facebook"
              />
            </a>
            <a href="">
              <FaInstagram
                size={54}
                className="text-darkblue dark:text-lightblue hover:scale-110"
                aria-label="Ícone do Instagram, que irá te redirecionar à página oficial do indaiacult no Instagram"
              />
            </a>
            <a href="">
              <FaTiktok
                size={44}
                className="text-darkblue dark:text-lightblue hover:scale-110"
                aria-label="Ícone do TikTok, que irá te redirecionar à página oficial do indaiacult no TikTok"
              />
            </a>
          </div>
        </div>

        <img
          className="md:block hidden"
          width={600}
          height={700}
          src={
            darkMode
              ? "/assets/undraw_landing_dark.svg"
              : "/assets/undraw_landing_light.svg"
          }
          alt="img"
        />
      </div>
    </div>
  );
};

export default LandingPage;
