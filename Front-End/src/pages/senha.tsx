import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";
import "../css/login.css";

const Senha: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const { darkMode } = useTheme();

  const handleSenha = async () => {
    try {
      const response = await axios.post("http://localhost:8000/senha", {
        email,
      });
      console.log(response.data);
      setEmail("");
      setSuccessMessage("Link enviado com sucesso");
      navigate("/login");
    } catch (error) {
      setError("Erro no email ou nome de usuário");
      console.error(error);
    }
  };

  return (
  <>
      <LandingNav />
      <div className="circles">
        <ul>
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
          <li className="dark:bg-main" />
        </ul>
      </div>
      <section className="mt-10 flex flex-col items-center justify-center">
        <div className="rounded-xl z-10 relative bg-white dark:bg-diffBlack dark:text-white border-highlight dark:border-highlightDark border-4 px-12 py-10 flex flex-col items-center gap-8">
        <img
          className="justify-content-center mb-1"
          width={180}
          height={150}
          src={
            darkMode
              ? "../../public/assets/cadeado-dark.svg"
              : "../../public/assets/cadeado-light.svg"
          }
          alt="cadeado"/> 
          <h1 className="font-semibold font-montserrat text-xl lg:text-4xl">
          Problemas para <span className="text-main dark:text-lightblue font-bold">entrar?</span>
          </h1>
          <p className="dark:text-white text-xl ">
            Insira o seu nome de usuário ou email e enviaremos  <br />
              um link para você voltar a acessar a sua conta.
          </p>
          <form
            onSubmit={handleSenha}
            className="flex flex-col gap-6 text-xl w-full"
          >
            <label htmlFor="">
              <span className="font-montserrat">E-mail</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                <MdOutlineAlternateEmail className="text-darkblue dark:text-main text-2xl" />
                <input
                  type="text"
                  placeholder="Insira seu e-mail"
                  className="font-montserrat bg-transparent "
                />
              </div>
            </label>
            <button
              type="submit"
              className="py-2 font-bold rounded-lg bg-darkblue dark:bg-main text-white hover:bg-main dark:hover:bg-lightblue"
            > <a href="/criar">
              Enviar link para logar</a>
            </button>
          </form>
          <img
          className="justify-content-center mb-2"
          width={430}
          height={30}
          src={
            darkMode
              ? "../../public/assets/ou-dark.svg"
              : "../../public/assets/ou-light.svg"
          }
          alt="ou"/> 
          <Link to="/cadastro" className="text-xl underline hover:text-main dark:hover:text-lightblue">
           crie uma nova conta
          </Link>
        </div>
      </section>
    </>
  );
};


export default Senha;
