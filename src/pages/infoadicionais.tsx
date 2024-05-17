import LandingNav from "../components/LandingNav";
import { MdOutlineAlternateEmail, MdOutlineLock } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import AddSocialMedialButton from "../components/AddSocialMedialButton";

const InfoAdicionaisPage = () => {
  return (
    <section>
      <LandingNav />
      <div className="flex flex-col items-center gap-4 justify-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl md:text-3xl dark:text-white font-bold font-montserrat">
            Informações adicionais
          </h1>
          <p className="text-lg md:text-xl dark:text-white">
            Aqui você pode inserir informações cruciais para sua divulgação como
            artista.
          </p>
        </div>
        <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
          <form className="flex flex-col gap-6 text-xl w-full">
            <label htmlFor="">
              <span className="font-montserrat dark:text-white">
                Redes sociais
              </span>
              <div className="flex gap-4">
                <div className="flex flex-row items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                  <FaInstagram className="text-darkblue dark:text-lightblue text-2xl" />
                  <input
                    type="text"
                    placeholder="Insira o link"
                    className="font-montserrat bg-transparent "
                  />
                </div>
                <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                  <FaFacebook className="text-darkblue dark:text-lightblue text-2xl" />
                  <input
                    type="text"
                    placeholder="Insira o link"
                    className="font-montserrat bg-transparent"
                  />
                </div>
              </div>
            </label>
            <div className="">
              <AddSocialMedialButton />
            </div>

            <label htmlFor="">
              <span className="font-montserrat dark:text-white">E-mail</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                <MdOutlineAlternateEmail className="text-darkblue dark:text-lightblue text-2xl" />
                <input
                  type="text"
                  placeholder="Insira seu e-mail"
                  className="font-montserrat bg-transparent "
                />
              </div>
            </label>

            <label htmlFor="">
              <span className="font-montserrat dark:text-white">Senha</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark  p-3 rounded-lg">
                <MdOutlineLock className="text-darkblue dark:text-lightblue text-2xl" />
                <input
                  type="text"
                  placeholder="Adicione uma descrição ao seu perfil"
                  className="font-montserrat bg-transparent "
                />
              </div>
            </label>

            <button
              type="submit"
              className="py-2 font-bold rounded-lg bg-darkblue dark:bg-lightblue text-white"
            >
              Cadastrar informações
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InfoAdicionaisPage;
